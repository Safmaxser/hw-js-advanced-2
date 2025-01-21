// TODO: write your code here
export function displaySpecialAttack(character) {
  return character.special.map(({ description = 'Описание недоступно', ...data }) => {
    return {...data, description}
  });
}
