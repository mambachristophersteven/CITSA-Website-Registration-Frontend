import MottoEntries from './MottoEntries';
import Navbar from './Navbar';
import styles from './View.module.css'
import ViewContent from './ViewContent';
function View(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <ViewContent/>
                <MottoEntries/>
            </div>
        </>
    )
}

export default View;