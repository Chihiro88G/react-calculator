const Clear = (props) => {

    const clickClear = () => {
        props.setInput(0)
        props.setResult(0)
        props.setPlus(false)
        props.setMinus(false)
        props.setMultiply(false)
        props.setDivide(false)
    }

    return (
        <button onClick={clickClear} className={'cButton'}>c</button>
    )
}

export default Clear;