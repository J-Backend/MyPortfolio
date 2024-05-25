
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../hooks/useLanguage";
import '../styles/Footer.css'


export const Footer = () => {

    const {translation} = useLanguage()

    return (
        <div className="boxFooter">
            <div className="boxSocial">
                <h3 >Social</h3>
                <div className="boxIcon">
                    <a target="_blank" href="https://www.linkedin.com/in/jeff-monge-m-0b1391260/">
                        <FaLinkedin className="icon" />
                    </a>
                    <a target="_blank" href="https://github.com/J-Backend">
                        <FaGithub className="icon" />
                    </a>
                </div>
            </div>
            <p>Copyright 2024. {translation.footer.text+" "}<span className="autor">{translation.footer.autor}</span></p>
        </div>
    )
}


