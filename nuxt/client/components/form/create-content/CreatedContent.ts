import StorageManager from "../../../programm-interface/StorageManager"

class CreatedContent extends StorageManager {
  private _createdContent: object[] = []
  private _localStorage: Storage

  constructor (localStorage: Storage) {
    super()
    this._localStorage = localStorage
    this._createdContent = CreatedContent.get(this._localStorage)
  }

  static get(localStorage: Storage): object | object[] {
    return JSON.parse(localStorage.getItem('createdContent') || '[]')
  }

  public get createdContent() {
    return this._createdContent
  }

  public set createdContent(value: object) {
    this._createdContent.push(value)
    this.write('createdContent', this._createdContent)
    this._createdContent = CreatedContent.get(this._localStorage)
  } 

}

export default CreatedContent