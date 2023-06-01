import styles from './About.module.css'
function Navbar1(){
    return(
        <div className={styles.navbar1}>
            <div className={styles.logo}>
                <img src="/citsa logo.png" alt="" />
                <h1>CITSA UCC</h1>
            </div>
            <div className={styles.name}>
                <p>Computer Science and Information technology <br></br>Student Association</p>
            </div>
        </div>
    )
}

export default Navbar1;