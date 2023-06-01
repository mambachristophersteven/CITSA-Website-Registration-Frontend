import styles from './Recorded.module.css'

function MottoEntries(){
    return(
        <>
            <div className={styles.motto}>
                    <p>Promoting <span>Development</span> through <span className={styles.tech}>technology</span></p>
                </div>
        </>
    )
}

export default MottoEntries;