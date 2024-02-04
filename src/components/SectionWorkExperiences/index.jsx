import Card from '../Card'
import './style.css'

export default function SectionWorkExperiences(props) {
    return (
        <section id={props.theme ? 'dark-work' : 'white-work'} className='section-work'>
            <div id='work-info' className={props.theme ? 'dark-info' : 'white-info'}>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                    Sites e Marketing Digital, nos empenhamos diariamente para entregar
                    resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className='work-cards'>
                <Card theme={props.theme} date="JUNHO 2012 - 2016" title="Web Designer" company="Pied Piper StartUp." about="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
                <Card theme={props.theme} date="AGOSTO 2016 - 2019" title="Product Designer" company="E Corp." about="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" />
                <Card theme={props.theme} date="FEVEREIRO 2019 - 2021" title="Digital Consulting" company="Arasaka Inc." about="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
            </div>
        </section>
    )
}