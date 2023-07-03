import '../css/Nal.css'

const Nal = () => {
    return (
    <>
        <div className='conteinerNal'>
            <p className='orangeNal'>Наличный обмен</p>
            <p className='Sotr'>Для наличного обмена вы можете встретиться с нашим
                <br/>сотрудником у торго центра: &nbsp;
                 <a className='TerraCiti' href='https://yandex.ru/maps/org/terrasiti/1103986058/?ll=30.757219%2C36.852513&z=16'>
                     <span className='TerraWhite'>Terra</span>Citi
                </a>
            </p>
            <p className='Sotr'>Так же, доступна <a className='TerraCiti whiteTG' href='https://t.me/AntalyaChanger'>доставка</a>. <br/>Она, ровно как и
                личная встреча обсуждается <a className='TerraCiti whiteTG' href='https://t.me/AntalyaChanger'>Здесь</a>
            </p>
        </div>
    </>
    )
}

export {Nal}