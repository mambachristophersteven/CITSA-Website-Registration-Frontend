import Navbar from "./Navbar";
import Content from "./Content";
import styles from "./Home.module.css"

function Container(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <Content/>
            </div>           
        </>
    );
}

export default Container;