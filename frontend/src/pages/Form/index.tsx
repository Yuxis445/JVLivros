import FormCard from "assets/components/FormCard";
import { useParams } from "react-router-dom";

function Form() {

    const params = useParams();

    return (

        <FormCard livroId={`${params.livroId}`} />

    );

}

export default Form;