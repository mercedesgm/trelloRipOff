
const ADD_CARD = 'ADD_CARD'
const DELETE_CARD = 'DELETE_CARD'
const MOVE_CARD = 'MOVE_CARD'

export const addCard = (card, section) => ({card, section, type: ADD_CARD})
export const deleteCard = (id, section) => ({id, section, type: DELETE_CARD})
export const moveCard = (card, origin, destination) => ({card, origin, destination, type: MOVE_CARD})

const initialState = {
    toDo: [],
    doing: [],
    done: []
}

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CARD:
            const newSectionArray = [...state[action.section]]
            newSectionArray.push(action.card)
            return {...state, [action.section]: newSectionArray}
        case DELETE_CARD:
            const upDatedSectionArray = [...state[action.section]].filter(card => card.id !== action.id)
            return {...state, [action.section]: upDatedSectionArray}
        case MOVE_CARD:
            const updatedOrigin = [...state[action.origin]].filter(card => card.id !== action.card.id)
            const updatedDestination = [...state[action.destination], action.card]
            return {...state, [action.origin]: updatedOrigin, [action.destination]: updatedDestination}
        default:
            return state
    }
}

export default tasks