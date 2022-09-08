import { shallowMount } from '@vue/test-utils';
import { it, describe, expect, test } from 'vitest';
import CartCard from '@/components/carts/CartCard.vue';

test('Math.sqrt()', () => {
	expect(Math.sqrt(4)).toBe(2);
	expect(Math.sqrt(144)).toBe(12);
	expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

// describe('CartCard.vue', () => {
// 	it('renders props.msg when passed', () => {
// 		const msg = 'CartCard';
// 		const wrapper = shallowMount(CartCard, {
// 			props: { msg },
// 		});
// 		expect(wrapper.text()).toMatch(msg);
// 	});
// });
