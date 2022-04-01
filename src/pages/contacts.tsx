import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Content from "../components/Content";

export default function Contacts() {
    return (
        <>
            <Container>
                <Navbar/>
                <Content>
                    <h1 className="title">🏫 Teacher Emails</h1>
                    <h2 className="subtitle">Mr. Feraco - <a href="mailto:fferaco@shufsd.org">fferaco@shufsd.org</a><br/>
                    Mr. Savelli - <a href="mailto:asavelli@shufsd.org">asavelli@shufsd.org</a>
                    </h2>
                    <br/>
                    <h1 className="title">👀 Advisor Emails</h1>
                    <h2 className="subtitle">Anthony Maida - <a href="mailto:amaida@shufsd.org">amaida@shufsd.org</a><br/>
                    </h2>
                    <br/>
                </Content>
                <Footer/>
            </Container>
        </>
    )
}