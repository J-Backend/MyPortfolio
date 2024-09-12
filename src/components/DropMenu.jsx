
import { useLanguage } from '../hooks/useLanguage'
import '../styles/DropMenu.css'

export const DropMenu = ({ resetDropDown }) => {

  const { translation } = useLanguage()

  return (
    <ul
      className='boxDropMenu'
    >

      {
        translation.nav.menu.map((option) => (
          <li key={option.id} className='item_d'>
            <a
              className='link_d'
              href={option.target}
              onClick={resetDropDown}
            >
              {option.item}
            </a>
          </li>
        ))
      }
      <li className='item_d boxIconNav'>
        <a className='link_d' target="_blank" rel="noopener noreferrer"
          href="https://www.linkedin.com/in/jeff-monge-m-0b1391260/">
          <i className="bi bi-linkedin"></i>
        </a>
      
      </li>

    </ul>

  )
}
