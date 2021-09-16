<template>
    <section class="introduction">
        <Container>
            <p class="introduction__content">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore dignissimos dolorum voluptate eos natus minima autem, velit fuga eius exercitationem. In maiores vel facere sint possimus accusantium neque commodi?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eos, aliquid sequi assumenda distinctio alias dolorum harum doloribus corrupti quibusdam accusamus. Dolor a, recusandae quisquam molestias nam dicta reiciendis beatae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod odio, quisquam est placeat, error dolores quidem quasi quos illo, aliquam veniam impedit incidunt nobis perspiciatis sint repellendus similique necessitatibus! Alias.
            </p>
            <img src="@/assets/img/introduction.svg" alt="Introdução ao iBook">
        </Container>
    </section>
</template>

<script>
import { Container } from '@/components'

export default {
    components: { Container },
};
</script>

<style scoped>
.introduction .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.introduction__content, img {
    width: 28rem;
}
</style>