<template>
    <li>
        <img
            class="generic-page"
            src="@/assets/img/page.svg"
            alt="Próxima página"
        />
        <p>Pag. {{ page.pageNumber }}</p>
    </li>
</template>

<script>
export default {
    props: {
        page: { type: Object, required: true },
    },
};
</script>

<style scoped>
img {
    width: 100%;
}

p {
    position: relative;
    top: -10px;
    font-size: 13px;
}

.generic-page {
    padding: 1rem;
}
</style>
