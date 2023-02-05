import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Feelings() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.feelings); // my GETTER
    const dispatch = useDispatch();

    const handleFeelings = (event) => {
        dispatch({type: 'SHARE_FEELINGS', payload: event.target.value});
    }

    return(
        <div>

        </div>
    )
}

export default Feelings;