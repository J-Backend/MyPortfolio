import { ToggleLang } from './ToggleLang'
import { DropMenu } from './DropMenu';
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useLanguage } from '../hooks/useLanguage';

import '../styles/Nav.css'

export const Nav = () => {

  const { translation } = useLanguage()

  const [dropDownOpen, setDropDownOpen] = useState(false)

  const toggleDropHandler = () => {
    setDropDownOpen(!dropDownOpen)
  }
  const resetDropDown = () => {
    setDropDownOpen(false)

  }

  const showDropNavClass = dropDownOpen ? 'boxNavCover' : ''
  const showDropMenuClass = dropDownOpen ? 'boxMenuCover' : ''

  return (
    <nav className={`boxNav ${showDropNavClass}`}>
      <div className='boxMain'>
        <div className='boxLang'>
          <ToggleLang />
        </div>

        <button
          onClick={toggleDropHandler}
          className='dropBtn'

        >
          {
            dropDownOpen
              ? (
                <AiOutlineClose className='iconCloseVisibility' size={26} />
              ) : (
                <AiOutlineMenu className='iconMenuVisibility' size={26} />
              )
          }


        </button>
      </div>

      <ul className={`boxMenu ${showDropMenuClass}`}>
        {
          translation.nav.menu.map((x) => (
            <li key={x.id} className='item'>
              <a className='link' href={x.target}>{x.item}</a>
            </li>
          ))
        }
      </ul>

      {
        dropDownOpen && <div className='boxDrop'>
          <DropMenu resetDropDown={resetDropDown} />
        </div>
      }
    </nav>
  )
}
