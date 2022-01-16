import "./styles.css";
import LivroStars from "../Livrostar";

type Props = {
    score: number;
    count: number;
}

function LivroScore({ score, count} : Props) {

    return (


        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <LivroStars score={score}/>
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>

    );

}

export default LivroScore;