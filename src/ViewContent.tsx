import styles from './View.module.css'


function ViewContent(){
    const fakeData = new Array(5).fill(
        {
            id: 1,
            image: "/citsa logo.png",
            name: "Asare Owen",
            index_number: "PS/CSC/19/61",
            email: "owen23@gmail.com",
            username: "King0",
            password: "*******"
        }
    )
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
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Index No.</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fakeData.map((user, index)=>(
                                        <tr>
                                            <td>{index+1}</td>
                                            <td><img src={user.image}/></td>
                                            <td>{user.name}</td>
                                            <td>{user.index_number}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>{user.password}</td>
                                        </tr>
                                    ))
                                }
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