// import HelloWorld from '@/components/HelloWorld.vue';
import { BookCard } from '@/components';
import { mount, shallowMount } from '@vue/test-utils';
import router from '~/src/router';

// describe('HelloWorld.vue', () => {
//     it('renders props.msg when passed', () => {
//         const msg = 'new message';
//         const wrapper = shallowMount(HelloWorld, {
//             props: { msg },
//         });
//         expect(wrapper.text()).toMatch(msg);
//     });
// });

describe('BookCard.vue', () => {
    it('SHOULD be able to send id book', async () => {
        router.push('/book/:id');
        await router.isReady();

        const wrapper = mount(BookCard, {
            global: { plugins: [router] },
        });
        expect(wrapper.html()).toContain('Lorem Ipsum');
    });
});
