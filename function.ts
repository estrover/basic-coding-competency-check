export default function sum(a: string, b: string): string {
    try {
        const number1: number = Number(a);
        const number2: number = Number(b);
        const result: number = number1 + number2;
        if (isNaN(result)) return 'Error';
        return `${result}`;
    }
    catch (err) {
        return "Error";
    }
}