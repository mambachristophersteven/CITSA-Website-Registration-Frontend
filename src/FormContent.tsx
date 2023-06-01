import styles from './About.module.css';
import Form from './Form';
import Motto from './Motto';
function FormContent(){
    return(
        <>
            <div className={styles.content}>
                <Form/>
                <Motto/>
                
            </div>
        </>
    );
}

export default FormContent;