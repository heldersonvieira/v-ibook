<template>
    <router-link :to="`books/${book.id}`">
        <div class="book">
            <img
                class="book__cover"
                :src="book.cover"
                :alt="`Capa do livro ${book.title}`"
            />
            <div class="book__info">
                <h3 class="info__title">{{ book.title }}</h3>
                <p class="info__author">{{ book.author }}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        book: { type: Object, required: true },
    },
};
</script>

<style scoped>
.book {
    width: 11rem;
    height: 18.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
}

.book__cover {
    box-shadow: 0px 4px 11px 4px rgba(0, 0, 0, 0.13);
    transition: all 300ms ease;
}

.book__cover:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 17px 4px rgba(0, 0, 0, 0.11);
}

.book__info {
    height: 30px;
    line-height: 1.5rem;
    color: var(--gray);
}

.info__title {
    font-size: 16px;
}

.info__author {
    font-size: 13px;
}
</style>
