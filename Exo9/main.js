let tables = parseInt(prompt("Tables à afficher :"));

for(let i = 1; i <= tables; i++) {
    console.log(`Table des ${i} :`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(`\n`)
}
