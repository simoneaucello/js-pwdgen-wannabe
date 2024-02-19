// 1
const name = prompt ('Scrivi il tuo nome') ;
console.log(name);

// 2
const surname = prompt('Scrivi il tuo cognome');
console.log(surname);

// 3
const favouriteColor = prompt('Qual è il tuo colore preferito?')
console.log(favouriteColor);

// 4
const fixedNumber = 24;
console.log(fixedNumber);

// 5 Milestone 1
const generate = name + surname + favouriteColor + fixedNumber;
console.log(generate);

// 6 Milestone 2
document.getElementById('password').innerHTML = `
<p> 
Ecco la tua insicurissima password: <strong>${generate}</strong>
</p>
`;