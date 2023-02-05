import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.feelings); // my GETTER
    const dispatch = useDispatch();

    const [newFeelings, setNewFeelings] = useState('')

    const handleFeelings = (event) => {
        dispatch({type: 'SHARE_FEELINGS', payload: newFeelings});
    }

    return(
        <div>
            <pre>{JSON.stringify(storeItems)}</pre>
            <input
            type='number' min='0' max='5'>
            </input>
        </div>
    )
}

export default Feelings;