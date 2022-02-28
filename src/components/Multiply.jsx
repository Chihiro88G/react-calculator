const Multiply = (props) => {

    const clickMultiply = () => {
        props.setMultiply(true)
        props.setPlus(false)
        props.setMinus(false)
        props.setDivide(false)
        props.setInput(0) 

        if (props.result === 0){
            props.setResult(1 * props.input)
        }
        
        if (props.result > 0) {
            if (props.plus || props.minus || props.multiply || props.divide) {
                props.setResult(props.result * 1)
            } else {
                props.setResult(props.result * props.input)
            }
        }
    }

    return (
        <button onClick={clickMultiply} className={'calButton'}><img src="https://img.icons8.com/ios-glyphs/344/multiply.png" alt="" /></button>
    )
}

export default Multiply;