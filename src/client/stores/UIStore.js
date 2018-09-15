import { observable, action } from 'mobx';

class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }
  // @observable auth = true
  // @observable anchorEl = null
  // @observable left = false


  handleMenu(event) {
    this.anchorEl = event.currentTarget;
    // this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.anchorEl = null;
    // this.setState({ anchorEl: null });
  }

  toggleDrawer(side) {
    this.side = !side;
    // this.setState({
    //   [side]: !this.state[side],
    // });
  }
}

export default UIStore;
