import {ReactComponent as Icon} from "./Group 2.svg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <main style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <section id="spinSection">
                <Icon id="spin"/>
                <h2 style={{position: "absolute", fontSize: "10vmin", zIndex: "-1"}}>Multicards</h2>
            </section>
            <section className="stuff">
                <p>Multicards is a tool that lets you make multi-dimensional flashcards. Say goodbye to making seperate study sets for questions, answers and explanations!</p>
            </section>
            <section className="stuff">
                <p>You can make your own study sets from scratch or you can import them from other apps.</p>
            </section>
            <section className="stuff">
                <p>You can test yourself on different sides at different times, for example, you can test yourself on the meaning of a Japanese word based on the kanji and pronunciation.</p>
            </section>
            <section className="stuff">
                <p>Explore sets made by other users and choose to make your sets public or private.</p>
            </section>
            <section className="stuff">
                <Link to="/"><h2>Try Multicards today!</h2></Link>
                <p>Coming soon to the App Store</p>
            </section>
        </main>
    )
}
export default About;