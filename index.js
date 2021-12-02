const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const findMatching = (array, name) => {
    return array.filter(item => item.toUpperCase() === name.toUpperCase())
}

const fuzzyMatch = (array, firstLetters) => {
    return array.filter(item => item[0] + item[1] === firstLetters)
}

const matchName = (array, string) => {
    return array.filter(item => item.name === string)
}



// console.log(matchName(drivers, 'Sammy'))