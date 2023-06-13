const placesToTravel = [
    { id: 5, name: 'Japan' },
    { id: 11, name: 'Venecia' },
    { id: 23, name: 'Murcia' },
    { id: 40, name: 'Santander' },
    { id: 44, name: 'Filipinas' },
    { id: 50, name: 'Madagascar' }
  ];
  
  for (let i = placesToTravel.length - 1; i >= 0; i--) {
    const destination = placesToTravel[i];
    if (destination.id === 11 || destination.id === 40) {
      placesToTravel.splice(i, 1);
    }
  }
  
  console.log(placesToTravel);