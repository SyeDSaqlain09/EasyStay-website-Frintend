import styles from '../../styles/components/Header/Header.module.css'
import { Image, Button} from "react-bootstrap";
import Logo from '../../assets/static/Lays-Logo.png'
function Header() {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <Image src={Logo.src} className={`${styles.logo} mx-2 my-1`} />
                <div className={styles.buttons}>
                    <Button className={`${styles.signin}`}>Sign in </Button>
                    <Button className={`${styles.signin}`}>Sign Up</Button>
                </div>
            </div>
            <>
                <div className={styles.navbar}>
                    <ul>
                        <li><a href="#">Hotel</a></li>
                        <li><a href="#">Tours</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Weather</a></li>
                        <li><a href="#">Destination</a></li>
                        <li><a href="#">News</a></li>
                   </ul>
               </div>
            </>
        </>


    )
}

export default Header