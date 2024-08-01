import { render, screen, fireEvent } from '@testing-library/react-native'
import { SelectList } from '.'

describe('Component: SelectList', () => {
  it('should be return city details selected.', () => {
    const data = [
      { id: '1', name: 'Campinas', latitude: 123, longitude: 456 },
      { id: '2', name: 'Jarinu', latitude: 789, longitude: 321 }
    ]

    const onPress = jest.fn()

    const {} = render(
      <SelectList data={data} onChange={() => {}} onPress={onPress} />
    )

    const selectedCity = screen.getByText(/jarinu/i)
    //console.log(selectedCity)
    fireEvent.press(selectedCity)

    expect(onPress).toBeCalledWith(data[1])
  })

  it('not should be show options when data props is empty', () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />)
    const options = screen.getByTestId('options')
    expect(options.children).toHaveLength(0)
  })
})
