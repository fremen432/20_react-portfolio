import { Link } from "react-router-dom"

export default function Header(props) {

    const { page, setPage } = props 

    return(
        <>
            <header>
                <h1 id="bigName" className="pointer" href='#aboutMe' > Clayton Miller </h1>
                <nav>
                    <ul>
                        <li> <a className="pointer hoverColorChange" href='#aboutMe' >About Me</a></li>
                        <li> <a className="pointer hoverColorChange" href='#projects' >Projects</a> </li>
                        <li> <a className="pointer hoverColorChange" href='#contactMe'>Contact Me</a> </li>
                        <li> <a className="pointer hoverColorChange" href='#resume'>Resume</a> </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}