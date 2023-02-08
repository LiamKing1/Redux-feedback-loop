import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function Understanding() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.understanding); // my GETTER
    const dispatch = useDispatch();

    const [newUnderstanding, setNewUnderstanding] = useState('')

    const handleUnderstanding = () => {
        dispatch({
            type: 'UNDERSTANDING_LVL',
            payload: newUnderstanding
        });
        setNewUnderstanding('');
        history.push('/support');
    }

    return (
        <div className="understanding">
            <ProgressBar step={2} />
            <h1> How well do you feel you understand the content? </h1>
            <input
                type='number'
                className="input"
                placeholder="0"
                min='0'
                max='5'
                value={newUnderstanding}
                onChange={(event) => setNewUnderstanding(event.target.value)}
            >
            </input>
            <br>
            </br>
            <br>
            </br>
            {newUnderstanding !== '' &&
                <button type='submit' onClick={() => handleUnderstanding()} className="button">Next</button>
            }
        </div>
    )
}

export default Understanding;