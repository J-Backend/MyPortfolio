
import { useLanguage } from '../hooks/useLanguage'
import '../styles/About.css'

export const About = () => {

  const {translation} = useLanguage()

  return (
    <div className="boxAbout">
      <h2 className='sectionTitle' id='aboutTitle'>{translation.about.title}</h2>
      <div className='paragraph'>
      {
        translation.about.description.map((x)=>(
          <p className={`${x.style}`} key={x.id}>{x.text}</p>
        ))
      }
      </div>
    </div>
  )
}
