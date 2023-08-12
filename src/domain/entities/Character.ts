export class Character {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;

    constructor(image: string, name: string, status: string,
        species: string, gender: string, origin: string) {
        this.image = image;
        this.name = name;
        this.status = status;
        this.species = species;
        this.gender = gender;
        this.origin = origin;
    }

    getDetail() {
        return `Origin planet: ${this.origin}`
    }

}