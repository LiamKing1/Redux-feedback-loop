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
        dispatch({
            type: 'SHARE_FEELINGS',
            payload: newFeeling
        });
        setNewFeeling('');
        history.push('/understanding');
    };

    return (
        <div className="feelings">
            <ProgressBar step={1} />
            <h1> How are you feeling today? </h1>
            <input
                type='number'
                className="input"
                placeholder="0"
                min='0'
                max='5'
                value={newFeeling}
                onChange={(event) => setNewFeeling(event.target.value)}
            >
            </input>
            <br>
            </br>
            <br>
            </br>
            {newFeeling !== '' &&
                <button type='submit' onClick={() => handleFeeling()} className="button">Next</button>
            }
        </div>
    )
}

export default Feelings;