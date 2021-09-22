<template>
    <ul>
        <img :src="$book.cover" :alt="`Capa do livro ${$book.title}`" />
    </ul>
</template>

<script>
export default {
    data() {
        return {
            book: {
                cover: '@/assets/img/page.svg',
                title: 'Pagina do livro',
            },
        };
    },

    computed: {
        $book() {
            return this.$store.getters.$chosenBook;
        },
    },
};
</script>

<style scoped></style>
