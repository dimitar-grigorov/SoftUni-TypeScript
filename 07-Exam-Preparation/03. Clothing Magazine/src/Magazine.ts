import { Cloth } from "./Cloth";

export class Magazine {
  constructor(
    public type: string,
    public capacity: number,
    public clothes: Cloth[] = []
  ) {}

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }

  removeCloth(color: string): boolean {
    let clothIndex = this.clothes.findIndex((c) => c.color === color);
    if (clothIndex > -1) {
      this.clothes.splice(clothIndex, 1);
      return true;
    }
    return false;
  }

  getSmallestCloth(): Cloth | undefined {
    return this.clothes.sort((a, b) => a.size - b.size)[0];
  }

  getCloth(color: string): Cloth | undefined {
    return this.clothes.find((c) => c.color === color);
  }

  getClothCount(): number {
    return this.clothes.length;
  }

  report(): string {
    return `${this.type} magazine contains:\n${this.clothes
      .sort((a, b) => a.size - b.size)
      .join("\n")}`;
  }
}
