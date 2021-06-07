import Reflux from 'reflux'
import Actions from './actions/Actions'

class AppStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = Actions;
    }
}

export default AppStore;