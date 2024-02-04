import logo from '../../assets/logo.png'
import iconBehance from '../../assets/behance.png'
import iconDribble from '../../assets/dribble.png'
import iconLinkedin from '../../assets/linkedin.png'
import iconGoogle from '../../assets/google-plus.png'
import iconFacebook from '../../assets/facebook.png'
import iconTwitter from '../../assets/twitter.png'
import './style.css'

export default function Footer(props) {

    return (
        <footer id={props.theme ? "dark-footer" : "white-footer"}>
            <img src={logo} alt='logo' />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                ferramentas e tecnologias personalizadas.</p>
            <div className='social'>
                <img src={iconFacebook} alt='facebook' />
                <img src={iconTwitter} alt='twitter' />
                <img src={iconLinkedin} alt='linkedin' />
                <img src={iconDribble} alt='dribble' />
                <img src={iconBehance} alt='behance' />
                <img src={iconGoogle} alt='googlePlus' />
            </div>
            <div className='copyright'>
                <p>Copyright 2022 &copy; <span>Deusiel</span></p>
            </div>
        </footer>
    )
}