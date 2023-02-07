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
        // event.prevenDefault();
        dispatch({
            type: 'SUPPORT_LVL',
            payload: newSupport
        });
        setNewSupport('');
        history.push('/page/three');
    };

    return (
        <div className="support">
            <ProgressBar step={3} />
            {/* <pre>{JSON.stringify(storeItems)}</pre> */}
            {/* <p> {storeItems}</p> */}
            {/* <form onSubmit={handleSupport}> */}
                <h1> How well do you feel you are being supported? </h1>
                <input
                    type='number'
                    className="input"
                    placeholder="0"
                    min='0'
                    max='5'
                    value={newSupport}
                    onChange={(event) => setNewSupport(event.target.value)}
                    required>
                </input>
                <button onClick={() => handleSupport()} className="button">Next</button>
            {/* </form> */}
            <br>
            </br>
        </div>
    )
}

export default Support;