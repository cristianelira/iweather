import { getNextDays } from './getNextDays'

//describe( é o conjunto de testes, serve pra agrupar e organizar
describe('getNextDays', () => {
  //ou test(
  it('should be return the next five days', () => {
    const days = getNextDays()
    console.log(days)

    expect(days.length).toBe(5) //o que espera de resultado do teste
  })
})
