import logo from '../../assets/logo.png'
import sun from '../../assets/sun.png'
import moon from '../../assets/moon.png'
import './style.css'

export default function Header(props) {
    return (
        <header id={props.theme ? "dark-header" : "light-header"}>
            <img src={logo} alt='logo' />
            <button onClick={props.themeFunction}>
                <img src={props.theme ? sun : moon} alt='mode' />
            </button>
        </header>
    )
}