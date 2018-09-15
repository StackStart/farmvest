class RootStore {
  constructor(client) {
    this.client = client;
  }

  setStore(store) {
    Object.assign(this, store);
  }
}

export default RootStore;
