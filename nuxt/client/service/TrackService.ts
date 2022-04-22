
import { API, deleteJson, postJson, patchJson} from './http';

class TrackService {
  static save(trackData: object, id?:string) {
    if (!id) {
      return postJson(API.track, trackData)
    }
    else{
      return patchJson(`${API.track}/${id}`, trackData)
    }
  }
  static delete(trackData: object, id: string) {
    deleteJson(`${API.track}/${id}`, trackData)
  }
}


export default TrackService