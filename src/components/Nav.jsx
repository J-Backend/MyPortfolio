import { ToggleLang } from './ToggleLang'
import { DropMenu } from './DropMenu';
import { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { useLanguage } from '../hooks/useLanguage';

import '../styles/Nav.css'

export const Nav = () => {

  const { translation } = useLanguage()

  const [dropDownOpen, setDropDownOpen] = useState(false)

  const toggleDropHandler = () => {
    console.log("did me click")
    setDropDownOpen(!dropDownOpen)
  }
  const resetDropDown = () => {
    setDropDownOpen(false)

  }

  const showDropNavClass = dropDownOpen ? 'boxNavCover' : ''
  const showDropMenuClass = dropDownOpen ? 'boxMenuCover' : ''

  return (
    <>
      <nav className={`boxNav ${showDropNavClass}`}>
        <div className='boxMain'>
          <div className='boxIcons'>
            <ToggleLang />

          </div>

          <button
            onClick={toggleDropHandler}
            className='dropBtn'

          >
            <AiOutlineMenu className='iconMenuVisibility' size={26} />

          </button>
        </div>

        <ul className={`boxMenu ${showDropMenuClass}`}>
          {
            translation.nav.menu.map((option) => (
              <li key={option.id} className='item'>

                <a className='link' href={option.target}>
                  {option.target === '#home' ? <i className="bi bi-house"></i> : ''}
                  {option.target === '#about' ? <i className="bi bi-person"></i> : ''}
                  {option.target === '#skills' ? <i className="bi bi-code"></i> : ''}
                  {option.target === '#projects' ? <i className="bi bi-boxes"></i> : ''}
                  {option.target === '#contact' ? <i className="bi bi-envelope-at"></i> : ''}
                </a>

              </li>
            ))
          }
          <li className='item'>
            <a className='link' target="_blank" rel="noopener noreferrer"
              href="https://www.linkedin.com/in/jeff-monge-m-0b1391260/">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>

        {
          dropDownOpen && <div className='boxDrop'>
            <DropMenu resetDropDown={resetDropDown} />
          </div>
        }
      </nav>

    </>

  )
}
