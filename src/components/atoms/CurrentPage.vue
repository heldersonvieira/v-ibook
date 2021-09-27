<template>
    <div class="current-page">
        <p v-html="pages[indexPage].text"></p>
        <small>
            Pag. <span>{{ pages[indexPage].pageNumber }}</span>
        </small>
    </div>
</template>

<script>
export default {
    props: {
        pages: { type: Array, required: true },
        indexPage: { type: Number, required: true },
    },
};
</script>

<style scoped>
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
