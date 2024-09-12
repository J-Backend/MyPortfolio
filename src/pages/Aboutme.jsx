
import { useLanguage } from '../hooks/useLanguage'

import logo from '../assets/images/logo.svg'

import irazu from '../assets/images/irazu.svg'
import bird from '../assets/images/bird.svg'
import volcano from '../assets/images/volcano.svg'

import '../styles/Aboutme.css'

export const Aboutme = () => {
  const { translation } = useLanguage()
  return (
    <div className="boxAboutme">
      <div className='boxSquare'>
        <div className='boxInfoAbout'>
          <h2 className='titleAbout'>{translation.about.title}.</h2>
          <p className='subtitleAbout'>{translation.about.subtitle}</p>
          <p className='descriptionAbout'>{translation.about.description}</p>
        </div>

        <div className='boxLogoAbout'>
          <img className='logoAbout' src={logo} alt="" />
        </div>
      </div>
      <div className='boxTopics'>

        <div className='topic'>
          <a href="https://www.google.com/imgres?q=costa%20rica%20lookout%20wikimedia%20commons&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F43%2FCrater_Irazu_volcano_CRI_01_2020_1512.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACrater_Irazu_volcano_CRI_01_2020_1512.jpg&docid=WUtF7p-vzYRPjM&tbnid=MF4kK3-s9eufMM&vet=12ahUKEwik4oH91aqIAxXaSDABHVpEGKwQM3oECGUQAA..i&w=4001&h=3000&hcb=2&ved=2ahUKEwik4oH91aqIAxXaSDABHVpEGKwQM3oECGUQAA" target='_blank'>
            <img src={irazu} alt="Imagen por Nombre del Autor, bajo licencia CC BY-SA 4.0" />
          </a>

        </div>
        <div className='topic'>
          <a href="https://www.google.com/imgres?q=costa%20rica%20%20wikimedia%20commons&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F14%2FKeel_billed_toucan_costa_rica.jpg&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AKeel_billed_toucan_costa_rica.jpg&docid=SsAhhRlcHEBvWM&tbnid=Irhrl-7A5qNATM&vet=12ahUKEwj3jsX71qqIAxWNfDABHWDfOIYQM3oECGgQAA..i&w=4256&h=2832&hcb=2&ved=2ahUKEwj3jsX71qqIAxWNfDABHWDfOIYQM3oECGgQAA" target='_blank'>
            <img src={bird} alt="Imagen por Nombre del Autor, bajo licencia CC BY-SA 4.0" />
          </a>

        </div>
        <div className='topic'>
          <a href="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd7%2FArenal_Volcano_in_Costa_Rica.JPG%2F1280px-Arenal_Volcano_in_Costa_Rica.JPG&tbnid=7uaLjcMJ-01cLM&vet=12ahUKEwjOuq_e06qIAxV6lYQIHSy-HhkQxiAoAHoECAAQJg..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AArenal_Volcano_in_Costa_Rica.JPG&docid=eRHkYgeOLSu21M&w=1280&h=848&itg=1&q=costa%20rica%20forest%20wikimedia%20commons&ved=2ahUKEwjOuq_e06qIAxV6lYQIHSy-HhkQxiAoAHoECAAQJg" target='_blank'>
            <img src={volcano} alt="Imagen por Nombre del Autor, bajo licencia CC BY-SA 4.0" />
          </a>

        </div>

      </div>


    </div>
  )
}
