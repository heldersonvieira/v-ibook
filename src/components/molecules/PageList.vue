<template>
    <ul>
        <img :src="$book.cover" :alt="`Capa do livro ${$book.title}`" />
    </ul>
</template>

<script>
export default {
    computed: {
        $book() {
            return this.$store.getters.$chosenBook;
        },
    },
};
</script>

<style scoped></style>
