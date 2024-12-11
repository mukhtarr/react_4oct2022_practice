import { BUY_ITEM1 } from "./itemType"
import { BUY_ITEM2 } from "./itemType"

const initialState = {
    numberofItems1: 20,
    numberofItems2: 20
}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM1:
            return {
                ...state,
                numberofItems1: state.numberofItems1 - action.item1qty
            }
        case BUY_ITEM2:
            return {
                ...state,
                numberofItems2: state.numberofItems2 - action.item2qty
            }

        default:
            return state
    }
}

export default itemReducer