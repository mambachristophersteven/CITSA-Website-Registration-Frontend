import Navbar3 from "./Navbar3";
import EntriesContent from "./EntriesContent";
import styles from './Entries.module.css'
import MottoEntries from "./MottoEntries";
function Entries(){
    return(
        <>
            <div className={styles.container}>
                <Navbar3/>
                <EntriesContent/>
                <MottoEntries/>
            </div>
            
        </>
    );
}

export default Entries;