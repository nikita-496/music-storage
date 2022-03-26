import StorageManager from "../../../programm-interface/StorageManager"

class TextAreas extends StorageManager {
  private _textAreas: object = {}
  private _localStorage: Storage

  constructor(localStorage: Storage) {
    super()
    this._localStorage = localStorage
    this._textAreas = TextAreas.get(this._localStorage)
  }
  
  static get(localStorage: Storage): object | object[] {
   return JSON.parse(localStorage.getItem('textAreas') || 'null') 
  }

  rewriteValue(storageValue: object | object[], valueKey: string) {
    this.write('textAreas', 
      {
        ...TextAreas.get(this._localStorage), [valueKey]: storageValue
      }
    )
   }

  rewriteValueKey(valueKey: string, storageValue: object | object[], ) {
    this.write('textAreas', 
      {
        ...TextAreas.get(this._localStorage), 
        //[tempKey]: [], 
        [valueKey]: storageValue
      }
    )
   }

   public get textAreas() {
     return this._textAreas
   }

   public set textAreas(value: [any[], string]) {
    if (!value[0].length) {
      value[0].push(1)
    }
    else{
      value[0].push(value[0].length + 1)
    }

    this.rewriteValue(value[0], value[1])
    this._textAreas = TextAreas.get(this._localStorage)
   }
}
export default TextAreas