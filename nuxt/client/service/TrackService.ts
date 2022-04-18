
import { API, deleteJson, postJson} from './http';

class TrackService {
  static save(trackData: object) {
    console.log(trackData)
      return postJson(API.track, trackData)
  }
  static delete(trackData: object, id: string) {
    deleteJson(`${API.track}/${id}`, trackData)
  }
}


export default TrackService