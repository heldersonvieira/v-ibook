<template>
    <img :src="book.cover" :alt="`Capa do livro ${book.title}`" />
</template>

<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>

<style scoped></style>
