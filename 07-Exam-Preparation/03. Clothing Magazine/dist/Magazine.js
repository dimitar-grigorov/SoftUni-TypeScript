"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    constructor(type, capacity, clothes = []) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = clothes;
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        let clothIndex = this.clothes.findIndex((c) => c.color === color);
        if (clothIndex > -1) {
            this.clothes.splice(clothIndex, 1);
            return true;
        }
        return false;
    }
    getSmallestCloth() {
        return this.clothes.sort((a, b) => a.size - b.size)[0];
    }
    getCloth(color) {
        return this.clothes.find((c) => c.color === color);
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        return `${this.type} magazine contains:\n${this.clothes
            .sort((a, b) => a.size - b.size)
            .join("\n")}`;
    }
}
exports.Magazine = Magazine;
