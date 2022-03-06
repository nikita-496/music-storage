import { API, postJson } from './http';

class ContenService {
  static save(contentData: object) {
    return postJson(API.content, contentData)
  }
}

export default ContenService