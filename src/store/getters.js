const getters = {
    $books(state) {
        return state.books;
    },

    $chosenBook(state) {
        state.chosenBook;
    },
};

export default getters;
