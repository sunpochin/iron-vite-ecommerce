import { expect, test } from 'vitest';
test('Math.sqrt()', () => {
	expect(Math.sqrt(4)).toBe(2);
	expect(Math.sqrt(144)).toBe(12);
	expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

import { shallowMount } from '@vue/test-utils';
import { it, before, describe } from 'vitest';
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/components/HomeView.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'HelloWorld';
    const wrapper = shallowMount(HelloWorld, {
			props: { msg },
		});
    expect(wrapper.text()).toMatch(msg)
  })

  it('renders props.msg when passed', () => {
		const msg = 'Home view';
		const wrapper = shallowMount(HomeView, {
			props: { msg },
		});
		expect(wrapper.text()).toMatch(msg);
	});
})
