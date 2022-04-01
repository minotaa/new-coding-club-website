import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Content from "../components/Content";

export default function Home() {
    return (
        <>
            <Container>
                <Navbar/>
                <Content>
                    <h1 className="title">👋 Welcome to the Coding Club 2021-2022 website!</h1>
                    <h2 className="subtitle">We meet every Friday in Room 410 at 2:20 PM to 3:30 PM!</h2>
                    <br/>
                    <h1 className="title">👨‍💻 What do we do at Coding Club?</h1>
                    <h2 className="subtitle">Members of the Coding Club engage in various software development and hardware development activities related to<br/> coding so people can connect over their passion for Computer Science/Coding. <br/>At each meeting, members can develop projects that span from building computers to creating a replication of a classic game, such as Pac-Man.</h2>
                    <br/>
                    <h1 className="title">❓ New to coding?</h1>
                    <h2 className="subtitle">That's completely okay! Everyone is a beginner at some point, if you think you're interested in coding but don't know where to start,<br/> experienced members of the coding club can help get you started on what may be a journey of discovery in the realm of computer science.</h2>
                </Content>
                <Footer/>
            </Container>
        </>
    )
}