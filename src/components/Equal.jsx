const Equal = (props) => {

    const clickEqual = () => {

        if (props.plus) {
            props.setResult(props.result + props.input)
            props.setInput(0)
        }

        if (props.minus) {
            props.setResult(props.result - props.input)
            props.setInput(0)
        } 
        
        if (props.multiply) {
            props.setResult(props.result * props.input)
            props.setInput(0)
        }

        if (props.divide) {
            if (props.result > 0 || props.input > 0) {
                props.setResult(props.result / props.input)
                props.setInput(0)
            }
        }
        console.log(props.result)
    }

    return (
        <button onClick={clickEqual}>=</button>
    )
}

export default Equal;