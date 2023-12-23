import { calcSum } from "./calcSum";


describe('calcSum', () => {

	test('Correct value', () => {
		expect(calcSum(5, 10)).toBe(15)
	})
})