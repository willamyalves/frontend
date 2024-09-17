import './Button.css'

const Button = ({id, name, action}) => {

  const handleAction = (e) =>{
    action(e);
  }

  return (
    <button 
    id={id}
    onClick={handleAction}
    >{name}
    </button>
  )
}

export default Button