const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [teachers].reverse();
console.log('Reversed:', reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(name => name.length >= 5);
console.log ('long Names', longNames)


// 3. Rimuovi 'Ed' dall'array teachers
const teachersWithoutEd = teachers.filter(name => name !== 'Ed');
console.log('Without Ed:', teachersWithoutEd);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent =teachers . includes('fabio');
console.log ('fabio present?' , isFabioPresent);

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

const teachersString = teachers .join (',');
console.log ('String :' , teachersString);