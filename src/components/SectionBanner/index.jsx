import './style.css'

export default function SectionBanner(props) {
    return (
        <section className='section-banner'>
            <div id='banner-img' className={props.theme ? "img-dark" : "img-white"} />
            <div className='banner-info'>
                <p>Branding / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    )
}