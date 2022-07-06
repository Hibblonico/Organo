import './button.css'

const Button = (props) => {
    return(
        <button className='bot'>
            {props.children}
        </button>
    )
}

export default Button
