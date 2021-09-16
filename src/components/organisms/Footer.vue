<template>
    <footer class="footer">
        <Container>
            <Logo />
            <small class="copyright"
                >Copyright &copy; {{ currentYear }} iBook</small
            >
        </Container>
    </footer>
</template>

<script>
import { Container, Logo } from '@/components';

export default {
    components: { Container, Logo },

    computed: {
        currentYear() {
            return new Date().getFullYear();
        },
    },
};
</script>

<style scoped>
.footer {
    background: var(--black);
    color: var(--white);
    width: 100%;
    font-family: Montserrat;
    position: fixed;
    bottom: 0;
    left: 0;
}

.footer .container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    width: 70px;
}
</style>
