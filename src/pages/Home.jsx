import { useLanguage } from '../hooks/useLanguage'
import passport from '../assets/images/passport.svg'
import '../styles/Home.css'

export const Home = () => {

  const URL_EN = "https://drive.proton.me/urls/0B73CHQWZ8#9t2SJCTfQQjz"
  const URL_ES = "https://drive.proton.me/urls/9ZB80587MC#3e2pyMBpui4O"

  const {translation, lang} = useLanguage()

  const handleDownload = () => {
    
    console.log("Lang is ",lang)
    if(lang==='es'){
      window.open(URL_ES, '_blank')
    }else{
      window.open(URL_EN, '_blank')
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
