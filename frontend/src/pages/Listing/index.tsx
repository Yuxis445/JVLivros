import LivroCard from "assets/components/LivroCard";
import Pagination from "assets/components/Pagination";

function Listing() {

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