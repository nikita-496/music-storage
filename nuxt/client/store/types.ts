import { ITrack } from '../programm-interface/ComponentInterfaces';

//Player
export interface PlayerState {
  active: null | ITrack
  volume: number
  duration: number
  currentTime: number
  pause: boolean,
  track: null | string,
}

export enum PlayerActionTypes {
  PLAY='PLAY',
  PAUSE='PAUSE',
  SET_ACTIVE='SET_ACTIVE',
  SET_DURATION='SET_DURATION',
  SET_CURRENT_TIME='SET_CURRENT_TIME',
  SET_VOLUME='SET_VOLUME',
  SET_TRACK='SET_TRACK'
}

interface PlayAction {
  type: PlayerActionTypes.PLAY
}

interface PauseAction {
  type: PlayerActionTypes.PAUSE
}

interface SetActiveAction {
  type: PlayerActionTypes.SET_ACTIVE
  payload: ITrack
}

interface SetDurationAction {
  type: PlayerActionTypes.SET_DURATION
  payload: number
}

interface SetCurrentTimeAction {
  type: PlayerActionTypes.SET_CURRENT_TIME
  payload: number
}

interface SetVolumeAction {
  type: PlayerActionTypes.SET_VOLUME
  payload: number
}

interface SetTrack {
  type: PlayerActionTypes.SET_TRACK
  payload: string
}

export type PlayerAction = 
  PlayAction 
  | PauseAction
  | SetActiveAction
  | SetCurrentTimeAction
  | SetDurationAction
  | SetVolumeAction
  | SetTrack


//Track
export interface TrackState {
  trackToUpdate: null | ITrack 
}
export enum TrackActionTypes {
  SET_TRACK_TO_UPDATE='SET_TRACK_TO_UPDATE',
}
interface SetTrackToUpdateAction {
  type: TrackActionTypes.SET_TRACK_TO_UPDATE
  payload: ITrack
}

export type TrackAction = SetTrackToUpdateAction

//Root
export interface RootState {
  version: string
}