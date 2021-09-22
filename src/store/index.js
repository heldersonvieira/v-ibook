import { createStore } from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default createStore({
    state: { books: [], chosenBook: [], pages: [] },
    mutations,
    actions,
    getters,
});
