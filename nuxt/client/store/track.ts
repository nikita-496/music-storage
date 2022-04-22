import { ITrack } from './../programm-interface/ComponentInterfaces';
import { TrackState, TrackActionTypes, RootState } from './types';
import { Module } from 'vuex';

const state: TrackState = {
  trackToUpdate: null,
}

const getters = {
  getTrackToUdpdate: (state: TrackState) => {
    return state.trackToUpdate
  }
}

const actions = {
  updateTrack({commit}, payload: ITrack ) {
    commit(TrackActionTypes.SET_TRACK_TO_UPDATE, payload)
  }
}

const mutations = {
  [TrackActionTypes.SET_TRACK_TO_UPDATE](state, payload: ITrack) {
    state.trackToUpdate = payload
  }
}

const namespaced: boolean = true;

export const track: Module<TrackState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};