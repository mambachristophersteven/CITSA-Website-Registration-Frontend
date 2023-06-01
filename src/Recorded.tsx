import styles from './Recorded.module.css'
import Navbar2 from "./Navbar2";
import RecordedContent from './RecordedContent';
import MottoRecorded from './MottoRecorded';
function Recorded(){
    return(
        <>
            <div className={styles.container}>
                <Navbar2/>
                <RecordedContent/>
                <MottoRecorded/>

            </div>
        </>
    );
}

export default Recorded;