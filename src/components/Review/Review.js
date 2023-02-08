// import Feelings from "../Feelings/Feelings";
// import Understanding from "../Understanding/Understanding";
// import Support from "../Support/Support";
// import Comments from "../Comments/Comments";
import { useSelector } from "react-redux";

function Review() {

    const feelingsStore = useSelector(store => store.feelings);
    const understandingsStore = useSelector(store => store.understanding);
    const supportsStore = useSelector(store => store.support);
    const commentsStore = useSelector(store => store.comments);

    return(
        <>
        <p>
            You said you feel: {feelingsStore}
         </p>

         <br>
        </br>

        <p>
            You have stated that your understanding level is: {understandingsStore}
        </p>

        <br>
        </br>

        <p>
            You have shared that your support level is: {supportsStore}
        </p>

        <br>
        </br>

        <p>
            Here is the comment you shared: {commentsStore}
        </p>
        </>
    )

}

export default Review;