import Blastoise from '../assets/blastoise.gif';
import Dragonite from '../assets/dragonite.gif';
import Charizard from '../assets/charizard.gif';
import Mewtwo from '../assets/mewtwo.gif';

export const pokemons = [
    {
        id : 1,
        name: "Blastoise",
        imgSrc: `${Blastoise}`,
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Hydro Cannon",
                damage: 10,
                getText: function() {
                    return `Bastoise lance ${this.name}`;
                }
            },
            {
                name: "Pistolet à O",
                damage: 50,
                getText: function() {
                    return `Bastoise lance ${this.name}`;
                }

            },
            {
                name: "Charge",
                damage: 30,
                getText: function() {
                    return `Bastoise lance ${this.name}`;
                }
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 2,
        name: "Charizard",
        imgSrc: `${Charizard}`,
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Feu d'Enfer",
                damage: 100,
                getText: function() {
                    return `Charizard lance ${this.name}`;
                }
            },
            {
                name: " Draco-Griffe",
                damage: 80,
                getText: function() {
                    return `Charizard lance ${this.name}`;
                }

            },
            {
                name: " Charge !",
                damage: 30,
                getText: function() {
                    return `Charizard lance ${this.name}`;
                }
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 3,
        name: "Dragonite",
        imgSrc: `${Dragonite}`,
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Point du dragon  !",
                damage: 70,
                getText: function() {
                    return `Dragonite lance ${this.name}`;
                }
            },
            {
                name: " Electro Canon !",
                damage: 100,
                getText: function() {
                    return `Dragonite lance ${this.name}`;
                }

            },
            {
                name: " Charge !",
                damage: 30,
                getText: function() {
                    return `Dragonite lance ${this.name}`;
                }
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 4,
        name: `Mewtwo`,
        imgSrc: `${Mewtwo}`,
        level: 17,
        lifePoint: 250,
        attacks : [ 
            {
                name: "Attack Psychic",
                damage: 80,
                getText: function() {
                    return `Mewtwo lance ${this.name}`;
                }
            },
            {
                name: "Sphère d'aura",
                damage: 100,
                getText: function() {
                    return `Mewtwo lance ${this.name}`;
                }
            },

            {
                name: "Charge",
                damage: 30,
                getText: function() {
                    return `Mewtwo lance ${this.name}`;
                }
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    }
]