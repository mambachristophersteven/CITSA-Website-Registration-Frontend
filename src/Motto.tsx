import styles from './About.module.css'

function Motto(){
    return(
        <>
            <div className={styles.motto}>
                    <p>Promoting <span>Development</span> through <span className={styles.tech}>technology</span></p>
                </div>
        </>
    )
}

export default Motto;