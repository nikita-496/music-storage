import {ITextAreas} from "~/client/programm-interface/ComponentInterfaces"
import StorageManager from "../../../programm-interface/StorageManager"

class TextAreas extends StorageManager {
  private _textAreas: ITextAreas = {}
  private _localStorage: Storage

  constructor(localStorage: Storage) {
    super()
    this._localStorage = localStorage
    this._textAreas = TextAreas.get(this._localStorage)
  }
  
  static get(localStorage: Storage): ITextAreas {
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
        [valueKey]: storageValue
      }
    )
   }

  public get textAreas() {
     return this._textAreas
   }

   public set textAreas(value: ITextAreas) {
     const key = Object.keys(value)[0]
     console.log(value[key])
    if (value[key].length === 0) {
      value[key].push(String(1))
    }
    else{
      value[key].push(String(value[key].length + 1))
    }
    this.rewriteValue(value[key], Object.keys(value)[0])
    this._textAreas = TextAreas.get(this._localStorage)
   }
}
export default TextAreas