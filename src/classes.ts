class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

   const cat = new Animal("Cat");
   cat.move(10);

   const catName = cat.name;