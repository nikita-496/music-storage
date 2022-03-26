
import { API, postJson, patchJson } from './http';

class ContenService {
  static save(contentData: object, id?: string) {
    if (!id) {
      return postJson(API.content, contentData)
    }
    /*else {
      console.log('Обновление данных')
      console.log(id)
      console.log(contentData)
      return patchJson(`${API.content}/${id}`, contentData)
    }*/
    
  }

}

export default ContenService