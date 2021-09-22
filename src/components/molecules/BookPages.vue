<template>
    <section class="book-pages">
        <ul class="pages-list">
            <li class="page">
                <img
                    class="cover-page"
                    :src="$book.cover"
                    :alt="`Capa do livro ${$book.title}`"
                />
            </li>
            <li class="page" v-for="(page, index) in $pages" :key="index">
                <img
                    class="generic-page"
                    src="@/assets/img/page.svg"
                    alt="Próxima página"
                    @click="indexPage = index"
                />
                <p>Pag. {{ page.pageNumber }}</p>
            </li>
        </ul>
        <div class="current-page">
            <p v-html="$currentPage"></p>
            <small>
                Pag. <span>{{ $pages[indexPage].pageNumber }}</span>
            </small>
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return { indexPage: 0 };
    },

    computed: {
        $book() {
            return this.$store.getters.$chosenBook;
        },

        $pages() {
            return this.$store.getters.$pages;
        },

        $currentPage() {
            return this.$pages[this.indexPage].text;
        },
    },
};
</script>

<style scoped>
.book-pages {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 3rem;
}

.pages-list {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    box-shadow: inset;
    overflow: auto;
    height: 700px;
}

.pages-list::-webkit-scrollbar {
    width: 10px; /* width of the entire scrollbar */
}

.pages-list::-webkit-scrollbar-track {
    background: var(--light-gray); /* color of the tracking area */
}

.pages-list::-webkit-scrollbar-thumb {
    background-color: #ada8a8; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
}

.page {
    width: 120px;
    height: 160px;
    border: 1px solid var(--gray);
    margin-bottom: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
}

.page:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}

.page img {
    width: 100%;
}

.page p {
    position: relative;
    top: -10px;
    font-size: 13px;
}

.generic-page {
    padding: 1rem;
}

.current-page {
    width: 600px;
    height: 700px;
    padding: 3.8rem 3.8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    text-align: justify;
    box-shadow: 10px 10px 30px 4px rgba(0, 0, 0, 0.2);
}

.current-page p {
    font-size: 14px;
    line-height: 1.5rem;
}

.current-page small {
    width: 45px;
}
</style>
