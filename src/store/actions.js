import connection from '@/services/axios';

const actions = {
    async addAllBooks({ commit }) {
        const { data: books } = await connection.get('books');
        commit('ADD_BOOKS', books);
    },

    async addChosenBook({ commit }, id) {
        const { data: book } = await connection.get(`books/${id}`);
        commit('ADD_CHOSEN_BOOK', book);
        commit('ADD_PAGES', book.pages);
    },
};

export default actions;
