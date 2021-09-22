<template>
    <section class="introduction container container">
        <Container>
            <p class="introduction__content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                dolore dignissimos dolorum voluptate eos natus minima autem,
                velit fuga eius exercitationem. In maiores vel facere sint
                possimus accusantium neque commodi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Reprehenderit eos, aliquid sequi
                assumenda distinctio alias dolorum harum doloribus corrupti
                quibusdam accusamus. Dolor a, recusandae quisquam molestias nam
                dicta reiciendis beatae.
            </p>
            <img
                src="@/assets/img/introduction.svg"
                alt="Introdução ao iBook"
            />
        </Container>
    </section>
</template>

<script>
import { Container } from '@/components';

export default {
    components: { Container },
};
</script>

<style scoped>
.introduction {
    display: flex;
    align-items: center;
    height: 58vh;
}

.introduction .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.introduction__content {
    font-size: 18px;
}

.introduction__content,
img {
    width: 28rem;
    line-height: 1.75rem;
}
</style>
