interface IStorageManager {
  write: (storageKey: string, storageValue: object | object[]) => void
  get: (localStorage: Storage) => object
  rewrite: (storageKey: string, tempValueKey: string, storageValue: object | object[]) => void
}

class StorageManager implements IStorageManager{
  write(storageKey: string, storageValue: object | object[]) {
   localStorage.setItem(storageKey, JSON.stringify(storageValue))
  }
  get (localStorage: Storage) {
    return {}
  }
  rewrite (storageKey: string, tempValueKey: string, storageValue: object | object[]) {}
}

export default StorageManager