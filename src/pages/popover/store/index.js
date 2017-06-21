/**
 * Created by liukai on 2017/6/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import * as util from '@/public/util'
import debugConfig from '../config'

Vue.use(Vuex)
let s2a = debugConfig.getConfig() || {};

const serverAction = {
  getServer(url){
    return s2a.aria2Connects[url];
  },
  getServerList(){
    let list = {};
    _.forEach(s2a.aria2Connects, function (server, url) {
      list[url] = server.rpc;
    });
    return list;
  },
  sendCall(url, ...args){
    if (url) {
      let server = serverAction.getServer(url);
      return server.aria2.send(...args)
    } else {
      return Promise.reject();
    }

  },
  mutilCall(url, ...args){
    return serverAction.sendCall(url,
      'system.multicall',
      ...args).catch(function (err) {
      console.log(err)
    })
  }
}
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  currentServerUrl: '',
  serverList: '',
  selectedGids: [],
  selectedDownloads: [],
  taskList: {},
  globalStat: false,
  globalOption: false,
  config: {
    refreshTime: 1,
  }
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  setTaskList (state, payload){
    state.taskList = {
      ...state.taskList,
      [payload.url]: payload.list
    }
  },
  refreshServerList(state){
    s2a&&s2a.getConfig&&s2a.getConfig();
    s2a = debugConfig.getConfig({options:s2a});
    state.config = s2a.config;
    state.serverList = serverAction.getServerList();
    state.currentServerUrl = Object.keys(state.serverList)[_.get(s2a,'config.defaultRpcIndex',0)];
  },
  setGlobalStat(state, payload){
    state.globalStat = payload.globalStat
  },
  setGlobalOption(state, payload){
    state.globalOption = payload.globalOption
  },
  changeList(state, payload){
    state.currentServerUrl = payload.url
    s2a.changeServer&&s2a.changeServer(payload.url)
  },
  setSelected(state, payload){
    state.selectedGids = payload.selected;
  }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
  toggleSelectedStatus({dispatch, state, getters, commit}, payload = {}){
    let selected = _.get(payload, 'gids', state.selectedGids);
    let selectedTasks = getters.taskLists.filter(download => ~selected.indexOf(download.gid));
    let taskStatus = {active: [], paused: []};
    selectedTasks.map(download => {
      taskStatus[download.status] = taskStatus[download.status] || [];
      taskStatus[download.status].push(download.gid)
    });
    let status = taskStatus.active.length >= taskStatus.paused.length ? 'active' : 'paused';
    let method = taskStatus.active.length >= taskStatus.paused.length ? 'pause' : 'unpause';
    return (taskStatus.active.length || taskStatus.paused.length) ? serverAction.mutilCall(state.currentServerUrl,
      taskStatus[status].map(gid => ({
        methodName: `aria2.${method}`,
        params: [gid]
      })))
      .then(() => {
        return dispatch('getTaskList');
      }) : Promise.resolve('no change')
  },
  saveOptions({dispatch, state}, payload = {}){
    return serverAction.sendCall(state.currentServerUrl,
      'aria2.changeGlobalOption',
      {
        ...payload.options
      })
      .then(() => {
        return dispatch('getTaskList',{
          loadOptions:true
        });
      }).catch(function (err) {
        console.log(err)
      })
  },
  startSelectedDownloads({dispatch, state}, payload = {}){
    let selected = _.get(payload, 'gids', state.selectedGids);
    return serverAction.mutilCall(state.currentServerUrl,
      selected.map(gid => ({methodName: 'aria2.unpause', params: [gid]})))
      .then(() => {
        return dispatch('getTaskList');
      })
  },
  pauseSelectedDownloads({dispatch, state}, payload = {}){
    let selected = _.get(payload, 'gids', state.selectedGids);
    return serverAction.mutilCall(state.currentServerUrl,
      selected.map(gid => ({
        methodName: 'aria2.pause',
        params: [gid]
      })))
      .then(() => {
        return dispatch('getTaskList');
      })
  },
  removeSelectedDownloads({dispatch, state, getters, commit}, payload = {}){
    let selected = _.get(payload, 'gids', state.selectedGids);
    let selectedTasks = getters.taskLists.filter(download => ~selected.indexOf(download.gid))
    return serverAction.mutilCall(state.currentServerUrl,
      selectedTasks.map(download => ({
        methodName: `aria2.${~['active', 'paused'].indexOf(download.status) ? 'remove' : 'removeDownloadResult'}`,
        params: [download.gid]
      })))
      .then(() => {
        commit('setSelected', {
          selected: []
        });
        return dispatch('getTaskList');
      })
  },
  getTaskList({commit, state}, payload = {}){
    if(!s2a || !s2a.getConfig){
      s2a = debugConfig.getConfig()
      if(!s2a.getConfig){
        return Promise.reject('获取global变量错误')
      }
    }
    if (!state.currentServerUrl) {
      commit('refreshServerList')
    }
    let calls = [
      {
        "methodName": 'aria2.tellActive',
        "params": []
      },
      {
        "methodName": 'aria2.tellWaiting',
        "params": [0, 1000]
      },
      {
        "methodName": 'aria2.tellStopped',
        "params": [0, 1000]
      },
      {
        "methodName": 'aria2.getGlobalStat',
        "params": null
      }
    ];
    if (payload.loadOptions) {
      calls.push({
        "methodName": 'aria2.getGlobalOption',
        "params": null
      })
    }
    return !state.currentServerUrl ? Promise.reject('no server url') : serverAction.sendCall(state.currentServerUrl,
      'system.multicall', calls)
      .then((tasks) => {
        commit('setTaskList', {
          list: _.concat(tasks[0][0] || [], tasks[1][0] || [], tasks[2][0] || []),
          url: state.currentServerUrl
        });
        commit('setGlobalStat', {
          globalStat: tasks[3][0]
        });
        if(_.get(window.safari||{},'extension.toolbarItems')){
          if(tasks[3][0]&&tasks[3][0].numActive){
            safari.extension.toolbarItems[0].badge = tasks[3][0].numActive
          }else{
            safari.extension.toolbarItems[0].badge = 0
          }
        }
        if (payload.loadOptions){
          commit('setGlobalOption', {
            globalOption: tasks[4][0]
          });

        }
        if (tasks[3] && tasks[3].code) {
          return Promise.reject(tasks[3])
        }
      }).catch(function (err) {
        commit('setGlobalStat', {
          globalStat: false
        });
        console.log('获取列表失败', err)
      })
  },

}

// getters are functions
const getters = {
  serverList: state => {
    return state.serverList;
  },
  getAllTaskGid(state, getters){
    return getters.taskLists.map((download) => {
      return download.gid;
    })
  },
  getGlobalStat(state){
    let stat = Object.assign({}, state.globalStat);
    stat.downloadSpeedText = util.bytesToSize(stat.downloadSpeed || 0) + '/s';
    stat.uploadSpeedText = util.bytesToSize(stat.uploadSpeed || 0) + '/s'
    return stat;
  },
  taskLists(state){
    let sorting = ['complete', 'error', 'paused', 'waiting', 'active']
    // sort
    let list = [];
    let rpcUrl = state.currentServerUrl;
    if (state.taskList[rpcUrl]) {
      list = state.taskList[rpcUrl].slice(0).sort((a, b) => {
        if (a.status === b.status) {
          return util.getEntryFileName(b) > util.getEntryFileName(a) ? 1 : -1
        } else {
          return sorting.indexOf(b.status) > sorting.indexOf(a.status) ? 1 : -1
        }
      })
    }
    return list
  },
  selectedTasks: function (state, getters) {
    return getters.taskLists.filter(download => ~state.selectedGids.indexOf(download.gid))
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
