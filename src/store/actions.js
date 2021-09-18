import connection from '@/services/axios';

const actions = {
    async addAllBooks({ commit }) {
        const { data } = await connection.get('books');
        commit('ADD_BOOKS', data);
    },

    async addChosenBook({ commit }, id) {
        const { data } = await connection.get(`books/${id}`);
        commit('ADD_CHOSEN_BOOK', data);
    },
};

export default actions;
