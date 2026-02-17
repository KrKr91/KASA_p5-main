import Banner from '../components/Banner'
import imgAboutBanner from '../assets/about-banner.png'
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <Banner image={imgAboutBanner} />
            
            <div className="about__container">
                <h1>a propos</h1>
            </div>
        </div>
    )
}

export default About