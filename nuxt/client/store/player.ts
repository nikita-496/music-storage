import { ITrack } from '../programm-interface/ComponentInterfaces';
import { PlayerState, PlayerActionTypes, RootState } from './types';
import { Module } from 'vuex';


const state: PlayerState = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: true,
  volume: 50,
  track: null
}

const getters = {
  isPause: (state: PlayerState) => {
    return state.pause
  },
  getVolume: (state: PlayerState) => {
    return state.volume
  },
  getDuration: (state: PlayerState) => {
    return state.duration
  },
  getCurrentTime: (state: PlayerState) => {
    return state.currentTime
  },
  getTrack: (state: PlayerState) => {
    return state.track
  }
}

const actions = {
  pause({commit}) {
    commit(PlayerActionTypes.PAUSE)
  },
  play({commit}) {
    commit(PlayerActionTypes.PLAY)
  },
  setActive({commit}) {
    commit(PlayerActionTypes.SET_ACTIVE)
  },
  setCurrentTime({commit}, payload: number) {
    commit(PlayerActionTypes.SET_CURRENT_TIME, payload)
  },
  setDuration({commit}, payload: number) {
    commit(PlayerActionTypes.SET_DURATION, payload)
  },
  setVolume({commit}, payload: number) {
    commit(PlayerActionTypes.SET_VOLUME, payload)
  },
  setTrack({commit}, payload: string) {
    commit(PlayerActionTypes.SET_TRACK, payload)
  }
}

const mutations = {
  [PlayerActionTypes.PAUSE](state) {
    state.pause = true
  },
  [PlayerActionTypes.PLAY](state) {
    state.pause = false
  },
  [PlayerActionTypes.SET_ACTIVE](state, payload: ITrack) {
    state.active = payload
    state.duration = 0
    state.currentTime = 0
  },
  [PlayerActionTypes.SET_CURRENT_TIME](state, payload: number) {
    state.currentTime = payload
  },
  [PlayerActionTypes.SET_DURATION](state, payload: number) {
    state.duration = payload
  },
  [PlayerActionTypes.SET_VOLUME](state, payload: number) {
    state.volume = payload
  },
  [PlayerActionTypes.SET_TRACK](state, payload: string) {
    state.track = payload
  }
}

const namespaced: boolean = true;

export const player: Module<PlayerState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};