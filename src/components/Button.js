const Button=(props)=>{
    return(<p className="btn" style={{width:props.width}} onClick={props.onClick} >{props.text}</p>);
}

export default Button;