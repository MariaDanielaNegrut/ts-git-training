export const computeFibonacciNumber = (position: number, isRecursive: boolean = false): number => {
    if (isRecursive) return recursiveFibonacci(position);

    if (position <= 2) {
        return 1;
    }

    if (position === 1 || position === 2) {
        return 1;
    }

    let smallFibonacciNumber = 1;
    let largeFibonacciNumber = 1;

    let currentPosition = 2;
    while (currentPosition < position) {
        const nextFibonacciNumber = smallFibonacciNumber + largeFibonacciNumber;
        smallFibonacciNumber = largeFibonacciNumber;
        largeFibonacciNumber = nextFibonacciNumber;
        currentPosition++;
    }
    return largeFibonacciNumber;
};

const recursiveFibonacci = (initialPosition: number, left: number = 0, right: number = 1, position?: number): number => {
    const currentPosition = position ?? initialPosition;
    if (initialPosition === 0) return 0;
    if (currentPosition === 0) return left;
    if (initialPosition > 0) {
        return recursiveFibonacci(initialPosition, right, left + right, currentPosition - 1);
    } else {
        return recursiveFibonacci(initialPosition, right - left, left, currentPosition + 1);
    }
}
