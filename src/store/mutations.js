const mutations = {
    ADD_BOOKS(state, books) {
        state.books = books;
    },

    ADD_CHOSEN_BOOK(state, book) {
        state.chosenBook = book;
    },
};

export default mutations;
