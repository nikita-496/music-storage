import { track } from './track';
import { player,  } from './player';
import { RootState } from './types';
import Vue from "vue";
import Vuex, {StoreOptions} from "vuex";

Vue.use(Vuex);

 const store = (): StoreOptions<RootState> => new Vuex.Store({
  state: {
    version: '1.0.0'
  },
  modules: {
    player,
    track
  }
 })

 export default store