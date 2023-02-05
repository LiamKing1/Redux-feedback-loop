import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function Feelings() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.comment); // my GETTER
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState('')

    const handleComment = () => {
        dispatch({ type: 'COMMENT', payload: newComment });
    }

    return (
        <div>
            <ProgressBar step={4} />
            {/* <pre>{JSON.stringify(storeItems)}</pre> */}
            <p> {storeItems}</p>
            <form onSubmit={handleComment}>
                <input
                    type='number'
                    min='0'
                    max='5'
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    required>
                </input>
            </form>
            <button onClick={() => history.push('/review')} className="button">Next</button>
        </div>
    )
}

export default Feelings;