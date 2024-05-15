let userPokemon;
let pokemonSelected = false;
let attackSelected;
let isValidAttack;
let rivalHp;
let damageDealt;
let rival;
let rivalPokemon;
let baseDamage;

function startGame() {
    let username = window.prompt("Welcome! Enter your username: ");
    let newGame = window.prompt(`Welcome ${username}! Would you like to start a new game? (yes/no)`).toLowerCase();

    if (newGame === "yes") {
        console.log("Let's gooo!");

        console.log("1.", pikachu.name);
        console.log("2.", charizard.name);
        console.log("3.", blastoise.name);
        console.log("4.", mewtwo.name);

        do {
            userPokemon = Number(window.prompt("Choose your Pokemon: (1-4) "));

            if (userPokemon >= 1 && userPokemon <= 4) {
                pokemonSelected = true;
            } else {
                window.alert("Enter a correct number!");
            }
        } while (!pokemonSelected);

        switch (userPokemon) {
            case 1:
                userPokemon = pikachu;
                console.log(`Nice! You chose ${pikachu.name}!`);
                break;

            case 2:
                userPokemon = charizard;
                console.log(`Nice! You chose ${charizard.name}!`);
                break;

            case 3:
                userPokemon = blastoise;
                console.log(`Nice! You chose ${blastoise.name}!`);
                break;

            case 4:
                userPokemon = mewtwo;
                console.log(`Nice! You chose ${mewtwo.name}!`);
                break;

            default:
                console.log("Choose a valid Pokemon! (1-4)");
        }

        rival = window.prompt("Enter your rival's name: ");
        let rivalPokemonIndex = Math.floor(Math.random() * 4) + 1;

        switch (rivalPokemonIndex) {
            case 1:
                rivalPokemon = pikachu;
                break;

            case 2:
                rivalPokemon = charizard;
                break;

            case 3:
                rivalPokemon = blastoise;
                break;

            case 4:
                rivalPokemon = mewtwo;
                break;
        }

        rivalHp = rivalPokemon.health; // Initialize rivalHp to rival's Pokemon's health
        console.log(`${rival} chose ${rivalPokemon.name}!`);

        let begin = window.prompt("Begin Battle? (yes/no)").toLowerCase();

        if (begin === "yes") {
            console.log("Your Pokemon:", userPokemon.name, "HP:", userPokemon.health, "Attacks:", userPokemon.attacks);

            while (rivalHp > 0 && userPokemon.health > 0) {
                validateAttack();
                attack(attackSelected);
                console.log("Rival's Pokemon current HP:", rivalHp);
                
                if (rivalHp > 0) {
                    rivalAttack();
                    console.log("Your Pokemon current HP:", userPokemon.health);
                }
            }
            
            if (rivalHp <= 0) {
                console.log(`You defeated ${rivalPokemon.name}!`);
            } else if (userPokemon.health <= 0) {
                console.log(`${rivalPokemon.name} defeated your ${userPokemon.name}!`);
            }
        } else {
            console.log("Cya!");
        }
    }
}

function battle(user1, user2) {
    console.log(`A battle between ${userPokemon} and ${rival} starts!`);
}

const pikachu = {
    name: "Pikachu",
    type: "Electric",
    health: 1000,
    attacks: ["Thunderbolt", "QuickAttack", "VoltTackle", "IronTail"]
};

const charizard = {
    name: "Charizard",
    type: "Fire",
    health: 1000,
    attacks: ["FlameThrower", "FireBlast", "OverHeat", "DragonClaw"]
};

const blastoise = {
    name: "Blastoise",
    type: "Water",
    health: 1000,
    attacks: ["IceBeam", "HydroPump", "SkullBash", "FlashCannon"]
};

const mewtwo = {
    name: "MewTwo",
    type: "Psychic",
    health: 1000,
    attacks: ["Thunderbolt", "Psychic", "FocusBlast", "ShadowBall"]
};

function validateAttack() {
    isValidAttack = false;
    while (!isValidAttack) {
        attackSelected = Number(window.prompt("Choose an Attack! (1-4)"));

        if (attackSelected >= 1 && attackSelected <= 4) {
            isValidAttack = true;
        } else {
            window.alert("Enter a valid attack! (#1-4)");
        }
    }
}

function attack(attackSelected) {
    switch (attackSelected) {
        case 1:
            baseDamage = 200;
            break;
        case 2:
            baseDamage = 100;
            break;
        case 3:
            baseDamage = 50;
            break;
        case 4:
            baseDamage = 25;
            break;
        default:
            window.Error("Not a valid attack!");
            return;
    }

    damageDealt = baseDamage * (Math.floor(Math.random() * 5) + 1);
    rivalHp -= damageDealt; // Decrement rivalHp by damageDealt

    console.log(userPokemon.name, "used:", userPokemon.attacks[attackSelected - 1]);
    console.log(rivalPokemon.name, "took:", damageDealt, "Damage!");
    console.log(rivalPokemon.name, "Current HP:", rivalHp);
}

function rivalAttack() {
    let randomAttackIndex = Math.floor(Math.random() * 4); // Random attack index between 0 and 3
    let rivalAttackName = rivalPokemon.attacks[randomAttackIndex];
    
    switch (randomAttackIndex) {
        case 0:
            baseDamage = 200;
            break;
        case 1:
            baseDamage = 100;
            break;
        case 2:
            baseDamage = 50;
            break;
        case 3:
            baseDamage = 25;
            break;
        default:
            console.error("Invalid attack index!");
            return;
    }

    damageDealt = baseDamage * (Math.floor(Math.random() * 5) + 1);
    userPokemon.health -= damageDealt; // Decrement userPokemon health by damageDealt

    console.log(rivalPokemon.name, "used:", rivalAttackName);
    console.log(userPokemon.name, "took:", damageDealt, "Damage!");
    console.log(userPokemon.name, "Current HP:", userPokemon.health);
}
