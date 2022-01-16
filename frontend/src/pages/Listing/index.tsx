import LivroCard from "assets/components/LivroCard";
import Pagination from "assets/components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react"
import { LivroPage } from "types/livro";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);
    useEffect(() => {

        axios.get(`${BASE_URL}/livros`)
        .then(response => {
            const data = response.data as LivroPage;
            console.log(data);
            setPageNumber(data.number);
        });

    },[]);

    

    return (
        <>

            <p>{pageNumber}</p>
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