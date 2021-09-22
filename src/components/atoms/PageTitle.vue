<template>
    <h1 class="page-title">
        {{ title }} <strong>{{ strongText }}</strong>
    </h1>
</template>

<script>
export default {
    props: {
        title: { type: String, required: true },
        strongText: { type: String, required: true },
    },
};
</script>

<style scoped>
.page-title {
    text-align: center;
    font-size: 3.8rem;
    font-weight: 500;
    padding: 2rem 0;
}
</style>
