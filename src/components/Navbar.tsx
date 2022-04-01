import { faDiscord, faPadlet } from '@fortawesome/free-brands-svg-icons'
import { faBuildingColumns, faCode, faContactBook, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="navbar-start">
                <div className="navbar-element">
                    <Link href="/">
                        <button title="Get a link to the discord" className="button">
                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>&nbsp;Coding Club 2021-2022
                        </button>  
                    </Link>
                </div>
                <div className="navbar-element">
                    <Link href="https://discord.gg/XjdBfW8sEy">
                        <button title="Get a link to the discord" className="button secondary">
                            <FontAwesomeIcon icon={faDiscord}></FontAwesomeIcon>&nbsp;Discord
                        </button>  
                    </Link>
                 </div>
            </div>
            <div className="navbar-end">
                <Link href="/resources">
                    <button title="Coding Resources" className="button personal">
                        <FontAwesomeIcon icon={faPadlet}></FontAwesomeIcon>&nbsp;Coding Resources
                    </button>  
                </Link>
                <Link href="/projects">
                    <button title="Coding Projects" className="button personal">
                        <FontAwesomeIcon icon={faBuildingColumns}></FontAwesomeIcon>&nbsp;Projects
                    </button>  
                </Link>
                <Link href="/contacts">
                    <button title="Coding Contacts" className="button personal">
                        <FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon>&nbsp;Contacts
                    </button>  
                </Link>
            </div>
        </nav>
    )
}