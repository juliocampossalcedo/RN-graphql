import { Character } from "../../domain/entities/Character";

interface Origin {
    name: string;
}

interface CharacterDetail {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
};

export class CharacterDTO {
    characters: {
        results: CharacterDetail[];
    }

    static toDomain(characterDTO : CharacterDTO) : Character[] {
        let arrayCharacter : Character[] = characterDTO.characters.results.map( 
            (char : CharacterDetail)=> {
                return new Character(
                    char.image,
                    char.name,
                    char.status,
                    char.species,
                    char.gender,
                    char.origin.name
                );
            }
        )
        return arrayCharacter;

    }
}