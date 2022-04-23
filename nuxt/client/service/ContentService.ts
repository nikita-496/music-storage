
import { API, postJson, patchJson, deleteJson, getJson } from './http';

class ContenService {
  static save(contentData: object, id?: string) {
    if (!id) {
      return postJson(API.content, contentData)
    }
    else {
      //console.log('Обновление данных')
      return patchJson(`${API.content}/${id}`, contentData)
    }
  }
  static get() {
    return getJson(API.content)
  }
  static delete(contentData: object, id: string) {
    deleteJson(`${API.content}/${id}`, contentData)
  }

  static filterContent(target: object[], criterion: string) {
    const copy = target.filter((item) => {
      return item.tag.includes(criterion);
    });
    return copy;
  }
  }


export default ContenService