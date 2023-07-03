const InputNumber = ({setNumber, number}) => {
    const handleChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    return (
        <input className='homeInput' value={number} onChange={handleChangeNumber} type="text" placeholder='ВАШИ КОНТАКТЫ'/> 
    )
}

export default InputNumber;