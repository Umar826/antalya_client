import { Link, Outlet } from 'react-router-dom';
import '../css/styles.css';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import DiamondIcon from '@mui/icons-material/Diamond';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const Layout = () => {
    return (
    <>
    <header>
        <div className='container'>
        <div className='header_div'>
            <a className='logo' href='/'>Antalya.<a className='logo_yellow'>Changer</a></a>
           
                <Link className='btn_item' to='/'>Обмен</Link>
                <Link className='btn_item' to='/nal'>Наличные</Link>
                <Link className='btn_item' to='/course'>Курс</Link>
                <a className='btn_item' href='https://t.me/AntalyChangerRev'>Отзывы</a>
            
        </div>
        </div>
    </header>

    <Outlet />

    <footer>
        <p className='all_change'>
        Все обмены проходят в ручном режиме, что гарантирует Вам своевременную обработку заявки<br></br> и получение средств в кратчайшие сроки. 
        Наши сотрудники всегда готовы <a className='telegram_status' href='https://t.me/AntalyaChanger'>Вам помочь!</a>
        </p>
        <div className='footer_main'>
            <div className='footer_help'>
                <HeadsetMicIcon style={{ color:'orange'}} className='head_phones'/>
                <p className='help_text'>Квалифицированная онлайн поддержка</p>
            </div>
            <div className='footer_help'>
                <DiamondIcon style={{ color:'orange'}} className='head_phones'/>
                <p className='help_text'>Интуитивно понятный интерфейс</p>
            </div>
            <div className='footer_help'>
                <ElectricBoltIcon style={{ color:'orange'}} className='head_phones'/>
                <p className='help_text'>Быстрый обмен ~ 3 минуты</p>
            </div>
        </div>
    </footer>
    
    </>
    )
}

export {Layout}