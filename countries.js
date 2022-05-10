
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  
  let array = [];
  
  for(let i=0; i< countries.length; i++ ) {
     const arr_1 = countries[i][0].toUpperCase() + countries[i].slice(1,-1).toLowerCase();
     const arr_2 = countries[i].slice(0,3);
     const arr_3 = countries[i].length;
  
     array.push([arr_1, arr_2, arr_3])
     console.log(array[i])
  }
  