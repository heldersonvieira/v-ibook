<template>
    <li class="category">
        {{ category.name }}
    </li>
</template>

<script>
export default {
    props: { category: { type: Object, required: true } },
};
</script>

<style scoped>
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
</style>
