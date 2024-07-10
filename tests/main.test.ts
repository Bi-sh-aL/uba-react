import { it, expect, describe } from 'vitest'

describe("main", () => {       

    it("should be true", () => {
        expect(1).toBeTruthy();
    })

    it("should add to value", () => {
        expect(1+4).toBe(5);
    })
})