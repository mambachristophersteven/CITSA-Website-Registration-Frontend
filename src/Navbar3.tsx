import styles from './Entries.module.css'
function Navbar3(){
    return(
        <div className={styles.navbar}>
            <div className={styles.logo}>
                <img src="/citsa logo.png" alt="" />
                <h2>CITSA UCC</h2>
            </div>
            <div className={styles.name}>
                <p>Computer Science and Information technology <br></br>Student Association</p>
            </div>
        </div>
    )
}

export default Navbar3;