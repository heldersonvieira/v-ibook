<template>
    <div class="book-info">
        <h2 class="title">{{ $book.title }}</h2>
        <p class="description" v-html="$book.description"></p>

        <div class="categories">
            <ul>
                <li
                    class="category"
                    v-for="category in $book.categories"
                    :key="category.id"
                >
                    {{ category.name }}
                </li>
            </ul>
        </div>

        <div class="release">
            <ul>
                <li>
                    <p>Lançamento</p>
                    <p>{{ $book.releaseDate }}</p>
                </li>
                <li>
                    <p>Autor</p>
                    <p>{{ $book.author }}</p>
                </li>
            </ul>
        </div>
    </div>
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
.book-info {
    color: var(--black);
}

.title {
    font-size: 28px;
}

.description {
    padding: 1.5rem 0;
    font-size: 18px;
    line-height: 1.75rem;
}
.categories ul {
    display: flex;
}

.category {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.35rem 1rem;
    background: var(--black);
    color: var(--white);
    font-size: 15px;
    border-radius: 5rem;
}

.release {
    margin-top: 1rem;
}

ul {
    display: grid;
    gap: 0.65rem;
    margin: 0.3rem 0;
}

li {
    display: grid;
    grid-template-columns: 160px 1fr;
    font-weight: 700;
    font-size: 13px;
}
</style>
