import './style.css'

export default function Card(props){
    return(
        <div id='card' className={props.theme ? 'card-dark' : 'card-white'}>
            <p>{props.date}</p>
            <h2>{props.title}</h2>
            <p>{props.company}</p>
            <p>{props.about}</p>
        </div>
    )
}