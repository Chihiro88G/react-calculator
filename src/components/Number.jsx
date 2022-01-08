const Number = (props) => {

    const numClick = () => {
        props.setInput(props.input * 10 + props.number)
    }

    return (
        <button onClick={numClick}>{props.number}</button>
    )
}

export default Number;