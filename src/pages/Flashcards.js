import Card from "./Card";
const Flashcards = (cards, questionSide, answerSide) => {
    return (
        <div>
            <h2>Flashcards</h2>
            <div id="stack">
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Flashcards;