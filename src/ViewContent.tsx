import styles from './View.module.css'


function ViewContent(){
    return(
        <>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <p>Current entries for<br />level <span>100’s</span></p>
                </div>
                <div className={styles.level_number1}>
                    <div className={styles.number}>
                        <p>199</p>
                    </div>
                </div>
                <div className={styles.table_box}>
                    <div className={styles.blue_box}></div>
                    <div className={styles.orange_box}></div>
                    <div className={styles.pink_box}></div>
                    <div className={styles.yellow_box}></div>
                    <div className={styles.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Index No.</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Asare Owen</td>
                                    <td>ps/csc/19/0033</td>
                                    <td>owen23@gmail.com</td>
                                    <td>kingO</td>
                                    <td>******</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Asare Owen</td>
                                    <td>ps/csc/19/0033</td>
                                    <td>owen23@gmail.com</td>
                                    <td>kingO</td>
                                    <td>******</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Asare Owen</td>
                                    <td>ps/csc/19/0033</td>
                                    <td>owen23@gmail.com</td>
                                    <td>kingO</td>
                                    <td>******</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Asare Owen</td>
                                    <td>ps/csc/19/0033</td>
                                    <td>owen23@gmail.com</td>
                                    <td>kingO</td>
                                    <td>******</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Asare Owen</td>
                                    <td>ps/csc/19/0033</td>
                                    <td>owen23@gmail.com</td>
                                    <td>kingO</td>
                                    <td>******</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={styles.button}>
                    <a href="/"><button>back to home</button></a>
                </div>
            </div>

        </>
    )
}

export default ViewContent;