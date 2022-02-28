const Minus = (props) => {

    const clickMinus = () => {
        props.setMinus(true)
        props.setPlus(false)
        props.setMultiply(false)
        props.setDivide(false)
        props.setResult(props.result - (props.input * -1))
        props.setInput(0)
    }

    return (
        <button onClick={clickMinus} className={'calButton'}><img src="https://img.icons8.com/material-rounded/344/minus.png" alt="" /></button>
    )
}

export default Minus;