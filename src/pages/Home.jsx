import { useLanguage } from '../hooks/useLanguage'
import passport from '../assets/images/passport.svg'
import cv_ES from '../assets/cv/CV-DesarrolladorSoftware-JefoneMonge.pdf'
import cv_EN from '../assets/cv/CV-SoftwareDeveloper-JefoneMonge.pdf'

import '../styles/Home.css'

export const Home = () => {

  const {translation, lang} = useLanguage()

  const handleDownload = () => {
    
    console.log("Lang is ",lang)
    if(lang==='es'){
      window.open(cv_ES, '_blank')
    }else{
      window.open(cv_EN, '_blank')
    }
  }

  return (
    <div className='boxHome'>
    
      <h1 className='title'>{translation.home.title}</h1>
      <h2 className='subtitle'>{translation.home.subtitle}</h2>
      <div className='boxlogo'>
         <img  className='logo' src={passport} alt="avatar" />
      </div>
   
      <button onClick={handleDownload} className='btnDownload'>{translation.home.action}</button>
    </div>
  )
}
