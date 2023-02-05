import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
            <pre>{JSON.stringify(storeItems)}</pre>
            <form onSubmit={handleFeeling}>
                <input
                    type='number'
                    min='0'
                    max='5'
                    value={newFeeling}
                    onChange={(event) => setNewFeeling(event.target.value)}
                    required>
                </input>
            </form>
        </div>
    )
}

export default Feelings;