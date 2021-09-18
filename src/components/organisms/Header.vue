<template>
    <header class="header">
        <nav>
            <ul class="header__items">
                <li class="item">
                    <router-link to="/">
                        <Logo />
                    </router-link>
                </li>
                <li class="item">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="item">
                    <router-link to="/about">Sobre</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
import { Logo } from '@/components';

export default {
    components: { Logo },
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 180px;
    background: var(--white);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
}

nav {
    width: 350px;
    height: 60px;
    margin: 0 auto;
}

.header__items {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--black);
    border-radius: 5rem;
    box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.3);
}

.item a {
    font-family: Montserrat;
    font-size: 18px;
    color: var(--white);
    cursor: pointer;
}
</style>
