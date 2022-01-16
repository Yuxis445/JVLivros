import LivroScore from "../LivroScore";
import { Link } from "react-router-dom";
import { Livro } from "types/livro";

type Props = {
    livro: Livro
}

function LivroCard( { livro } : Props) {    

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={livro.image} alt={livro.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{livro.title}</h3>
                <LivroScore count={livro.count} score={livro.score}/>
                
                <Link to={`/form/${livro.id}`}>
                
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>

                </Link>
            </div>
        </div>
    );

}

export default LivroCard;