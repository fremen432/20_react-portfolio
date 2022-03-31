import Footer from "../components/Footer"
import Header from "../components/Header"
import Body from "../components/HP-Body"

export default function Homepage() {
    return (
        <>
            <Header />
            <div className="body_footer_wrapper">
                <Body />
                <Footer/>
            </div>
        </>
    )
}