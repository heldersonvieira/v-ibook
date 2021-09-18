<template>
    <Container>
        <h2>Lançamentos</h2>
        <section class="books-list">
            <BookCard v-for="book in $books" :key="book.id" :book="book" />
        </section>
    </Container>
</template>

<script>
import { Container, BookCard } from '@/components';

export default {
    components: { Container, BookCard },

    created() {
        this.$store.dispatch('addAllBooks');
    },

    computed: {
        $books() {
            return this.$store.getters.$books;
        },
    },
};
</script>

<style scoped>
.books-list {
    display: flex;
    justify-items: flex-start;
    flex-wrap: wrap;
    gap: 2.9rem;
    padding-bottom: 7rem;
}

h2 {
    font-size: 22px;
    color: var(--gray);
    padding: 1rem 0;
}
</style>
