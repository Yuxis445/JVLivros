import LivroCard from "assets/components/LivroCard";
import Pagination from "assets/components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/request";

function Listing() {

    //forma errada
    axios.get(`${BASE_URL}/livros`)
        .then(response => {
            console.log(response.data)
        });

    return (
        <>
            <Pagination />

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    <div className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                        <LivroCard />
                    </div>

                    
                </div>
            </div>

        </>
    )

}

export default Listing;