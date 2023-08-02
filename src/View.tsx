import Motto from './Motto';
import Navbar from './Navbar';
import styles from './View.module.css'
import ViewContent from './ViewContent';
function View(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <ViewContent/>
                <Motto/>
            </div>
        </>
    )
}

export default View;