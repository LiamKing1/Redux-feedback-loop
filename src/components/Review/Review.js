import Feelings from "../Feelings/Feelings";
import Understanding from "../Understanding/Understanding";
import Support from "../Support/Support";
import Comments from "../Comments/Comments";

function Review() {

    const feelingsStore = useSelector(store => store.feelings);
    const understandingsStore = useSelector(store => store.understanding);
    const supportsStore = useSelector(store => store.support);
    const commentsStore = useSelector(store => store.comments);

    return(
        <>
        <Feelings />
        <Understanding />
        <Support />
        <Comments />
        </>
    )

}

export default Review;