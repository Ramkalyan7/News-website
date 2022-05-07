const Resnav = (props) => {
let styles=props.state.display;
  let handleClick=()=>{
    if(styles==="flex"){
    props.setStateFunc({display:"none"});
    }
    else{
      props.setStateFunc({display:"flex"});
    }
  }

  return (
    <div  className="toggle-button" onClick={handleClick}>
      <span  className="toggle-item"></span>
      <span className="toggle-item"></span>
      <span className="toggle-item"></span>
    </div>
  );
};

export default Resnav;