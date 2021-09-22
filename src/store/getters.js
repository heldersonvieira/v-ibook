const getters = {
    $books(state) {
        return state.books;
    },

    $chosenBook(state) {
        return state.chosenBook;
    },

    $pages(state) {
        return state.pages;
    },
};

export default getters;
