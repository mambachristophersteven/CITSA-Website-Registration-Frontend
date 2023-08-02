import styles from './Recorded.module.css'
import Navbar from "./Navbar";
import RecordedContent from './RecordedContent';
import Motto from './Motto';
function Recorded(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <RecordedContent/>
                <Motto/>

            </div>
        </>
    );
}

export default Recorded;