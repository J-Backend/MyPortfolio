
import { useLanguage } from '../hooks/useLanguage'
import '../styles/Main.css'

export const Main = () => {

    const { translation } = useLanguage()

 
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

                  

                </div>
            </div>
 

        </div>
    )
}



