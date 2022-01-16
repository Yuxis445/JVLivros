import './style.css'
import { Link } from "react-router-dom";
import { Livro } from "types/livro";
import { useEffect, useState } from 'react';
import axios from 'axios';


type Props = {
    livroId : string;
}

function FormCard( {livroId}: Props ) {

    const [livro, setLivro] = useState<Livro>();

    useEffect(() => {
        axios.get(`$BASE_URL/livros/${livroId}`)
            .then(response =>(
                setLivro(response.data)
            ));
    }, [livroId]);

    return (

        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={livro?.image} alt={livro?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{livro?.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >

    );

}

export default FormCard;