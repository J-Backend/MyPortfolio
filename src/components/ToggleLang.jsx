
import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import '../styles/ToggleLang.css'

export const ToggleLang = () => {
    
    const { handleLang } = useLanguage()

    const [isChecked, setIsChecked] = useState(false)

    const handleCheck = () => {
        setIsChecked(!isChecked)
    }

    const changeLang  = ()=>{

        const languageSelected = isChecked==false ?  'es' : 'en'

        handleLang(languageSelected)
    }

    return (
        <div className='boxToggleLang'>
            {/* Toogle button adapted from uiverse.io */}
            <div className="checkbox-wrapper-10">
                <input
                    checked={isChecked}
                    onChange={handleCheck}
                    type="checkbox" id="cb5" className="tgl tgl-flip" />
                <label onClick={changeLang} htmlFor="cb5" data-tg-on="Inglés" data-tg-off="Spanish" className="tgl-btn"></label>
            </div>
        </div>
    )
}
