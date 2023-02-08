import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function Support() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.support); // my GETTER
    const dispatch = useDispatch();

    const [newSupport, setNewSupport] = useState('')

    const handleSupport = () => {
        dispatch({
            type: 'SUPPORT_LVL',
            payload: newSupport
        });
        setNewSupport('');
        history.push('/comments');
    };

    return (
        <div className="support">
            <ProgressBar step={3} />
            <h1> How well do you feel you are being supported? </h1>
            <input
                type='number'
                className="input"
                placeholder="0"
                min='0'
                max='5'
                value={newSupport}
                onChange={(event) => setNewSupport(event.target.value)}
            >
            </input>
            <br>
            </br>
            {newSupport !== '' &&
                <button type='submit' onClick={() => handleSupport()} className="button">Next</button>
            }
        </div>
    )
}

export default Support;