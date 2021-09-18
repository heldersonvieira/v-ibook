<template>
    <section class="home">
        <PageTitle title="Bem-vindo ao " strongText="iBook" />
        <BooksList />
    </section>
</template>

<script>
import { PageTitle, BooksList } from '@/components';
export default {
    components: { PageTitle, BooksList },
};
</script>

<style scoped></style>
