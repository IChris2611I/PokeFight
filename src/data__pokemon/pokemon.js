export const pokemons = [
    {
        id : 1,
        name: "Blastoise",
        imgSrc: "",
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Hydro Cannon !",
                damage: 110,
                text: `Blastoise lance ${this.name}`
            },
            {
                name: "Pistolet à O!",
                damage: 50,
                text: `Blastoise lance ${this.name}`,

            },
            {
                name: " Charge !",
                damage: 30,
                text : `Blastoise lance ${this.name}`
                
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 2,
        name: "Charizard",
        imgSrc: "../assets/charizard.gif",
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Feu d'Enfer",
                damage: 100,
                text: `Charizard lance ${this.name}`
            },
            {
                name: " Draco-Griffe",
                damage: 80,
                text: `Charizard lance ${this.name}`,

            },
            {
                name: " Charge !",
                damage: 30,
                text : `Charizard lance ${this.name}`
                
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 3,
        name: "Dragonite",
        imgSrc: "../assets/dragonite.gif",
        level: 17,
        lifePoint: 250,
        attacks : [
            {
                name: "Point du dragon  !",
                damage: 70,
                text: `Dragonite lance ${this.name}`
            },
            {
                name: " Electro Canon !",
                damage: 100,
                text: `Dragonite lance ${this.name}`,

            },
            {
                name: " Charge !",
                damage: 30,
                text : `Dragonite lance ${this.name}`
                
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    },

    {
        id : 4,
        name: "Mewtwo",
        imgSrc: "../assets/mewtwo.gif",
        level: 17,
        lifePoint: 250,
        attacks : [ 
            {
                name: "Attack Psychic !",
                damage: 80,
                text: `Mewtwo lance ${this.name}`
            },
            {
                name: " Sphère d'aura !",
                damage: 100,
                text: `Mewtwo lance ${this.name}`,

            },

            {
                name: " Charge !",
                damage: 30,
                text : `Mewtwo lance ${this.name}`
                
            },
        ],
        hasTakenDamage(damage) {
            return this.lifePoint - damage;
        }
    }
]