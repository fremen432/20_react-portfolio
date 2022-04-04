export default function Header(props) {
    const navLinks = [
        {
            title: 'About Me',
            id: 'aboutMe'
        },
        {
            title: 'Projects',
            id: 'projects'
        },
        {
            title: 'Resume',
            id: 'resume'
        },
        {
            title: 'Contact Me',
            id: 'contactMe'
        },
    ]

    return(
        <>
            <header>
                <h1 id="bigName" className="aboutMe-bigName" href='#aboutMe'>Clayton Miller</h1>
                <ul className="navLinks-unordered-list box">
                    {navLinks.map(el =>
                        <li className="aboutMe-li box">
                            {/* <div className="fade-element " ></div> */}
                            <a className="navLink-anchorTag " href={'#' + el.id}>{el.title}</a>
                        </li>    
                    )}
                </ul>
            </header>
        </>
    )
}