import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ProgressBar from "../ProgressBar/ProgressBar";

function Comments() {

    const history = useHistory(); // use History
    const storeItems = useSelector(store => store.comment); // my GETTER
    const dispatch = useDispatch();

    const [newComment, setNewComment] = useState('')

    const handleComment = () => {
        // event.prevenDefault();
        dispatch({
            type: 'COMMENT',
            payload: newComment
        });
        setNewComment('');
        history.push('/review')
    }

    return (
        <div className="comments">
            <ProgressBar step={4} />
            {/* <pre>{JSON.stringify(storeItems)}</pre> */}
            {/* <p> {storeItems}</p> */}
            {/* <form onSubmit={handleComment}> */}
                <h1> Share any comment you feel should be shared!</h1>
                <input
                    type='text'
                    className="input2"
                    placeholder="ENTER COMMENT"
                    min='0'
                    max='250'
                    value={newComment}
                    onChange={(event) => setNewComment(event.target.value)}
                    required>
                </input>
                <button onClick={() => handleComment()} className="button">Next</button>
            {/* </form> */}
            <br>
            </br>
        </div>
    )
}

export default Comments;