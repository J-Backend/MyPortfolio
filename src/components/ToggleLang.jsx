
import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import '../styles/ToggleLang.css'

export const ToggleLang = () => {

    const { handleLang } = useLanguage()

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    const changeLang = () => {

        const languageSelected = isChecked == false ? 'es' : 'en'

        handleLang(languageSelected)
    }

    return (

        <div className='boxLang'>
            <label className="toggle-switch" onClick={changeLang}>

                <input type="checkbox" className="sr-only" checked={isChecked} onChange={handleCheck} />
               
                <div className="slider">
                    
                </div>
                <div className='boxIcon'>
                <i className="bi bi-translate"></i>
                </div>
                
            </label>
        </div>
    )
}
