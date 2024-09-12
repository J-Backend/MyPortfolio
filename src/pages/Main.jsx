
import { useLanguage } from '../hooks/useLanguage'
import '../styles/Main.css'

export const Main = () => {

    const URL_EN = "https://drive.proton.me/urls/N69SHQ69Y0#jWvsu372WXhI"
    const URL_ES = "https://drive.proton.me/urls/3PGRTPS6Z4#ly8S281zhIe2"

    const { translation, lang } = useLanguage()

    const handleDownload = () => {

        console.log("Lang is ", lang)
        if (lang === 'es') {
            window.open(URL_ES, '_blank')
        } else {
            window.open(URL_EN, '_blank')
        }
    }

    return (
        <div className='boxHome'>
            <div className='boxTitles'>

                <div className='boxTop'>
                    <div className='topTitle'>
                        <h3 className='hello'>{translation.home.hello}</h3>
                        <div className='line'></div>
                    </div>


                    <h1 className='title'>{translation.home.title}</h1>
                    <h2 className='subtitle'>{translation.home.subtitle}</h2>

                    <div className='boxBtn'>
                        <button onClick={handleDownload} className='btnCV'>{translation.home.action}</button>
                    </div>

                </div>
            </div>
 

        </div>
    )
}



