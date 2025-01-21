// TODO: write your code here
export function displaySpecialAttack(character) {
  const newListSpecial = [];
  character.special.forEach(elSpecial => {
    const { description = 'Описание недоступно', ...data } = elSpecial;
    newListSpecial.push({...data, description})
  });
  return newListSpecial;
}
