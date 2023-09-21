import { main } from "../src/main";

describe('Kata tests', () => {
    test('Should return 1', () => {
        expect(main()).toBe(1);
    })

    test('Failing test', () => {
        expect(main()).toBe(2);
    })
})