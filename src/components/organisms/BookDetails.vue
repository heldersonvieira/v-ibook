<template>
    <Container>
        <section class="book-details">
            <BookCover />
            <BookInfo />
        </section>
    </Container>
</template>

<script>
import { Container, BookCover, BookInfo } from '@/components';

export default {
    components: { Container, BookCover, BookInfo },

    created() {
        const idBook = this.$route.params.id;
        this.$store.dispatch('addChosenBook', idBook);
    },
};
</script>

<style scoped>
.book-details {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 58vh;
    margin: 7rem 0;
}

.book-details .book-cover {
    width: 20rem;
}
</style>
