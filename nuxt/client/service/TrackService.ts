
import { API, postJson} from './http';

class TrackService {
  static save(trackData: object) {
    console.log(trackData)
      return postJson(API.track, trackData)
  }
}


export default TrackService