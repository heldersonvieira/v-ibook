<template>
    <transition>
        <div class="book-cover">
            <img :src="$book.cover" :alt="`Capa do livro ${$book.title}`" />
            <router-link :to="`/book/${$book.id}/reading`"
                >LER LIVRO
            </router-link>
        </div>
    </transition>
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

<style scoped>
.book-cover {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 20px 4px rgba(0, 0, 0, 0.2);
}

a {
    background: var(--black);
    color: var(--white);
    font-weight: 700;
    height: 50px;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

a:hover {
    opacity: 0.89;
}

.v-enter-from,
.v-leave-to {
    opacity: 1;
}

.v-enter-to,
.v-leave-from {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: all 3s ease;
}
</style>
