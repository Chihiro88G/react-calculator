const Plus = (props) => {

    const clickPlus = () => {
        props.setPlus(true)
        props.setMinus(false)
        props.setMultiply(false)
        props.setDivide(false)
        props.setResult(props.result + props.input)
        props.setInput(0)
    }

    return (
        <button onClick={clickPlus} className={'calButton'}>➕</button>
    )
}

export default Plus;