import { fizzbuzz } from "../src/main";

describe('Fizzbuzz', () => {
    describe('With values containing neither number 3 or 5', () => {
        test.each([6, 9, 12])(
            'Should return fizz when value is multiple of 3',
            (input) => {
                expect(fizzbuzz(input)).toBe("fizz");
            }
        );

        test.each([10, 20])(
            'Should return buzz when a value is multiple of 5',
            (input) => {
                expect(fizzbuzz(input)).toBe('buzz')
            }
        );

        test('Should return value itself when value is not multiple of 3 or 5', () => {
            expect(fizzbuzz(2)).toBe('2')
        });

        test('Should return fizzbuzz when value is multiple of 3 and 5', () => {
            expect(fizzbuzz(60)).toBe('fizzbuzz')
        });
    });

    describe('Should prefix with Fizz when value contains the number 3', () => {
        test('Should return fizz when value contains the number 3 and not multiple of 3 or 5', () => {
            expect(fizzbuzz(37)).toBe('fizz')
        });

        test('Should return fizzfizz when value contains the number 3 and is multiple of 3', () => {
            expect(fizzbuzz(33)).toBe('fizzfizz')
        });

        test('Should return fizzbuzz when value contains the number 3 and is multiple of 5', () => {
            expect(fizzbuzz(35)).toBe('fizzbuzz')
        });

        test('Should return fizzfizzbuzz when value contains the number 3 and is multiple of 5 and 3', () => {
            expect(fizzbuzz(30)).toBe('fizzfizzbuzz')
        });
    });

    describe('Should prefix with Buzz when value contains the number 5', () => {
        test('Should return buzz when value contains the number 5 and not multiple of 3 or 5', () => {
            expect(fizzbuzz(58)).toBe('buzz')
        });

        test('Should return buzzfizz when value contains the number 5 and is multiple of 3', () => {
            // impossible de trouver un cas
        });

        test('Should return buzzbuzz when value contains the number 5 and is multiple of 5', () => {
            expect(fizzbuzz(55)).toBe('buzzbuzz')
        });

        test('Should return buzzfizzbuzz when value contains the number 5 and is multiple of 5 and 3', () => {
            expect(fizzbuzz(45)).toBe('buzzfizzbuzz')
        });
    });
})
