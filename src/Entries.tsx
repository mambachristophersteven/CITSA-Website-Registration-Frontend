import Navbar from "./Navbar";
import EntriesContent from "./EntriesContent";
import styles from './Entries.module.css'
import Motto from "./Motto";
function Entries(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <EntriesContent/>
                <Motto/>
            </div>
            
        </>
    );
}

export default Entries;