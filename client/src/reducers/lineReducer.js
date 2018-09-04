import { ADD_ONE } from '../actions/types'


const initialState = [
  {
    id: 12,
    text: 'Let"s test this fucking rendering',
    quantity: 0,
  },
  {
    id: 3435363,
    text: 'Some text in second item',
    quantity: 0,
  },
  {
    id: 56,
    text: 'Some text in third item',
    quantity: 0,
  },
  {
    id: 78123,
    text: 'Some text in fourth item',
    quantity: 0,
  },
  {
    id: 126757,
    text: 'Let"s test this fucking rendering',
    quantity: 0,
  },
  {
    id: 34678,
    text: 'Some text in second item',
    quantity: 0,
  },
  {
    id: 566789789,
    text: 'Some text in third item',
    quantity: 0,
  },
  {
    id: 788908,
    text: 'Some text in fourth item',
    quantity: 0,
  },
  {
    id: 1269789,
    text: 'Let"s test this fucking rendering',
    quantity: 0,
  },
  {
    id: 34,
    text: 'Some text in second item',
    quantity: 0,
  },
  {
    id: 5669789,
    text: 'Some text in third item',
    quantity: 0,
  },
  {
    id: 7822,
    text: 'Some text in fourth item',
    quantity: 0,
  },
  {
    id: 1278954,
    text: 'Let"s test this fucking rendering',
    quantity: 0,
  },
  {
    id: 344556678,
    text: 'Some text in second item',
    quantity: 0,
  },
  {
    id: 5656845365,
    text: 'Some text in third item',
    quantity: 0,
  },
  {
    id: 787895643467,
    text: 'Some text in fourth item',
    quantity: 0,
  },
]

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return state.map(line => {
        if (line.id === action.payload) {
          return {
            ...line,
            quantity: line.quantity += 1
          }
        } else {
          return line
        }
      })

    default:
      return state
  }
}