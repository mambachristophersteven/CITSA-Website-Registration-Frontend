import styles from './About.module.css';
import FormContent from './FormContent';
import Navbar1 from './Navbar1';

function About(){
    return(
        <>
            <div className={styles.container}>
                <Navbar1/>
                <FormContent/>
            </div>
        </>
    )
}

export default About;