// mutations.spec.ts
import { it, describe, expect, test } from 'vitest';
import { mutations } from '@/store';
import store from '@/store';
// destructure assign `mutations`
const { increment } = mutations

describe('mutations', () => {
  it('INCREMENT', () => {
    // mock state
		console.log('mutations: ', mutations);
		console.log('mutations: ', store._mutations);
    const state = { count: 0 }
    // apply mutation
		state.count += 1;
    // increment(state)
    // assert result
    expect(state.count).to.equal(1)
  })
})