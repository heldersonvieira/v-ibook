<template>
    <Container>
        <section class="book-pages">
            <h1>{{ $book.title }}</h1>
            <BookPages />
        </section>
    </Container>
</template>

<script>
import { Container, BookPages } from '@/components';
export default {
    components: { Container, BookPages },

    computed: {
        $book() {
            return this.$store.getters.$chosenBook;
        },
    },
};
</script>

<style scoped>
.book-pages h1 {
    padding-left: 9.1rem;
    padding-bottom: 1.5rem;
    font-size: 28px;
    color: var(--black);
}
</style>
