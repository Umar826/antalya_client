const InputName = ({setName, name}) => {
    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    return (
        <input className='homeInput' value={name} onChange={handleChangeName} type="text" placeholder='Ф.И.О НА АНГЛИЙСКОМ'/>  
    )
}

export default InputName;