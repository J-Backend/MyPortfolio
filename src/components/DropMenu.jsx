
import { useLanguage } from '../hooks/useLanguage'
import '../styles/DropMenu.css'

export const DropMenu = ({ resetDropDown }) => {

  const { translation } = useLanguage()
  
  return (
    <ul
      className='boxDropMenu'
    >
      {
        translation.nav.menu.map((x) => (
          <li key={x.id} className='item_d'>
            <a
              className='link_d'
              href={x.target}
              onClick={resetDropDown}
            >
              {x.item}
            </a>
          </li>
        ))
      }
    </ul>
  )
}
