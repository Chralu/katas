function containsDigit(number: number, digit: number): Boolean {
    const digitsCount = Math.floor(Math.log10(number) + 1)
    for (let digitIndex = 0; digitIndex < digitsCount; digitIndex++) {
        const readDigit = Math.trunc(number / Math.pow(10, digitIndex)) % 10
        if (digit === readDigit) {
            return true
        }
    }
    return false
}

function fizzbuzzMultiple(value: number): string {
    const isMultipleOf5 = value % 5 === 0
    const isMultipleOf3 = value % 3 === 0

    if (isMultipleOf5 && isMultipleOf3) return "fizzbuzz"
    if (isMultipleOf5) return "buzz"
    if (isMultipleOf3) return "fizz"
    return ''
}

function fizzbuzzDigits(value: number): string {
    if (containsDigit(value, 3)) return 'fizz'
    if (containsDigit(value, 5)) return 'buzz'
    return ''
}

export function fizzbuzz(value: number): string {
    const prefix = fizzbuzzDigits(value)
    const suffix = fizzbuzzMultiple(value)

    if (prefix.length === 0 && suffix.length === 0) return `${value}`
    return `${prefix}${suffix}`
}
