const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
      return { found: true, position: index };
    } else {
      return { found: false };
    }
  }
  
  const result1 = finderName(nameFinder, 'Tony');
console.log(result1); 

const result2 = finderName(nameFinder, 'Hulk');
console.log(result2); 
  