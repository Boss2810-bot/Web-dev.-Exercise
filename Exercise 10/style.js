function adjective() {
    let words = ["Crazy", "Amazing", "Fire"];
    let d = Math.floor(Math.random() * words.length);
    console.log("Adjective Index:", d); // Debugging line
    return words[d]; 
}

function shopname() {
    let words = ["Engine", "Foods", "Garments"];
    let d = Math.floor(Math.random() * words.length);
    console.log("Shopname Index:", d); // Debugging line
    return words[d]; 
}

function anotherword() {
    let words = ["Bros", "Limited", "Hub"];
    let d = Math.floor(Math.random() * words.length);
    console.log("Anotherword Index:", d); // Debugging line
    return words[d]; 
}

console.log("Business Name\n", adjective(), shopname(), anotherword());
