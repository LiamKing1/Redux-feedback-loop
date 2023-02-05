import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function Feelings() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.feelings); // my GETTER
    const dispatch = useDispatch();

    const [newFeeling, setNewFeeling] = useState('')

    const handleFeeling = () => {
        dispatch({ type: 'SHARE_FEELINGS', payload: newFeeling });
    }

    return (
        <div>
            <ProgressBar step={1} />
            {/* <pre>{JSON.stringify(storeItems)}</pre> */}
            <p> {storeItems}</p>
            <form onSubmit={handleFeeling}>
                <h1> How are you feeling today? </h1>
                <input
                    type='number'
                    min='0'
                    max='5'
                    value={newFeeling}
                    onChange={(event) => setNewFeeling(event.target.value)}
                    required>
                </input>
            </form>
            <button onClick={() => history.push('/page/one')} className="button">Next</button>
        </div>
    )
}

export default Feelings;