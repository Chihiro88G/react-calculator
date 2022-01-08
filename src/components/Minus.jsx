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
        <button onClick={clickMinus} className={'calButton'}>➖</button>
    )
}

export default Minus;