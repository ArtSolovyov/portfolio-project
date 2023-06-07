const { getRandomHex } = require("../utils/getRandomHex");

describe("Функция получения случайного цвета", () => {

    const firstResult = getRandomHex();
    const secondResult = getRandomHex();
    const thirdResult = getRandomHex();

    test("Возвращается строка из 7 символов", () => {
        expect(firstResult.length).toBe(7);
        expect(secondResult.length).toBe(7);
        expect(thirdResult.length).toBe(7);
    });

    test("Каждый раз возвращается уникальная строка", () => {
        expect(firstResult).not.toBe(secondResult);
        expect(secondResult).not.toBe(thirdResult);
        expect(thirdResult).not.toBe(firstResult);
    });
})