import styles from './About.module.css';
import FormContent from './FormContent';
import Navbar from './Navbar';

function About(){
    return(
        <>
            <div className={styles.container}>
                <Navbar/>
                <FormContent/>
            </div>
        </>
    )
}

export default About;