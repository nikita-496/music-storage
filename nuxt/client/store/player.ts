import { ITrack } from '../programm-interface/ComponentInterfaces';
import { PlayerState, PlayerActionTypes, RootState } from './types';
import { Module } from 'vuex';


const state: PlayerState = {
  active: null,
  currentTime: 0,
  duration: 0,
  pause: false,
  volume: 0
}

const getters = {
  isPause: (state: PlayerState) => {
    return state.pause
  }
}

const actions: ActionTree = {
  pause({commit}) {
    commit(PlayerActionTypes.PAUSE)
  },
  play({commit}) {
    commit(PlayerActionTypes.PLAY)
  },
  setActive({commit}) {
    commit(PlayerActionTypes.SET_ACTIVE)
  },
  setCurrenrTime({commit}) {
    commit(PlayerActionTypes.SET_CURRENT_TIME)
  },
  setDuration({commit}) {
    commit(PlayerActionTypes.SET_DURATION)
  },
  setVolume({commit}) {
    commit(PlayerActionTypes.SET_VOLUME)
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