const InputIban = ({setIban, iban}) => {
    const handleChangeIban = (e) => {
        setIban(e.target.value)
    }
    return (
        <input className='homeInput' value={iban} onChange={handleChangeIban} type="text" placeholder='ИБАН'/> 
    )
}

export default InputIban;