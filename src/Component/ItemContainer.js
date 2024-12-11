import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyItem1 } from '../redux/item/itemAction'
import { buyItem2 } from '../redux/item/itemAction'

function ItemContainer(props) {

    const [item1, setitem1] = useState(0)
    const [item2, setitem2] = useState(0)

    return (
        <div>
            <h1>Number of Items 1 : {props.numberofItems1}</h1>
            <h3>How many item1 required :</h3>
            <input className='form-control' type="number" onChange={(event) => setitem1(event.target.value)} />
            <button onClick={() => props.buyItem1(item1)} >Buy Item1</button>
            <hr />
            <h1>Number of Items 2 : {props.numberofItems2}</h1>
            <h3>How many item2 required :</h3>
            <input className='form-control' type="number" onChange={(event) => setitem2(event.target.value)} />
            <button onClick={() => props.buyItem2(item2)} >Buy Item2</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numberofItems1: state.numberofItems1,
        numberofItems2: state.numberofItems2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyItem1: (num1) => { dispatch(buyItem1(num1)) },
        buyItem2: (num2) => { dispatch(buyItem2(num2)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)