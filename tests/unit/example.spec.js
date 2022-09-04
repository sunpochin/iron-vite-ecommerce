
import { shallowMount } from '@vue/test-utils';
import { it, describe, expect, test } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/components/HomeView.vue';

test('Math.sqrt()', () => {
	expect(Math.sqrt(4)).toBe(2);
	expect(Math.sqrt(144)).toBe(12);
	expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'HelloWorld';
    const wrapper = shallowMount(HelloWorld, {
			props: { msg },
		});
    expect(wrapper.text()).toMatch(msg)
  })

  // it('Home view', () => {
	// 	const msg = 'Home view';
	// 	const wrapper = shallowMount(HomeView, {
	// 		props: { msg },
	// 	});
	// 	expect(wrapper.text()).toMatch(msg);
	// });
})
