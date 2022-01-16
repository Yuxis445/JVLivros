import LivroCard from "assets/components/LivroCard";
import Pagination from "assets/components/Pagination";
import axios from "axios";
import { BASE_URL } from "utils/request";
import { useEffect, useState } from "react"
import { LivroPage } from "types/livro";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<LivroPage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {

        axios.get(`${BASE_URL}/livros?size=12&page=${pageNumber}&sort=id`)
        .then(response => {
            const data = response.data as LivroPage;
            setPage(data);
        });

    },[pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber)
    };


    return (
        <>

            <Pagination page={page} onChange= {handlePageChange} />

            <div className="container">
                <div className="row">
                    {page.content.map(item => (

                            <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3" mb-3>
                                <LivroCard livro={item} />
                            </div>
                        )
                    )}
                    
                </div>
            </div>

        </>
    )

}

export default Listing;