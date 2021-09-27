import connection from '@/services/connection';

export default {
    install: (app) => {
        app.config.globalProperties.$get = {
            async allBooks() {
                const { data: allBooks } = await connection.get('books');
                return allBooks;
            },

            async chosenBook(id) {
                const { data: book } = await connection.get(`books/${id}`);
                return book;
            },
        };
    },
};
