<template>
    <div class="layout">
        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script>
import { Header, Footer } from '@/components';
export default {
    components: { Header, Footer },
};
</script>

<style scoped></style>
