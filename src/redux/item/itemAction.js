import { BUY_ITEM1 } from "./itemType"
import { BUY_ITEM2 } from "./itemType"


export const buyItem1 = (num1) => {
    return {
        type: BUY_ITEM1,
        item1qty: num1
    }
}
export const buyItem2 = (num2) => {
    return {
        type: BUY_ITEM2,
        item2qty: num2
    }
}