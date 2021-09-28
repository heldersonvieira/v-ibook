<template>
    <section class="book-pages">
        <ul class="pages-list">
            <Cover class="page" :book="$book" />
            <Page
                class="page"
                v-for="(page, index) in $pages"
                :key="index"
                :page="page"
                @click="indexPage = index"
            />
        </ul>
        <CurrentPage :pages="$pages" :indexPage="indexPage" />
    </section>
</template>
<script>
import { Cover, Page, CurrentPage } from '@/components';

export default {
    components: { Cover, Page, CurrentPage },

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
</style>
