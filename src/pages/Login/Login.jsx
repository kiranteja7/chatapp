
import styles from './login.module.css'
import image from '../../assets/8c98994518b575bfd8c949e91d20548b.jpg'
import { LoginForm } from '../../components/LoginForm/LoginForm'

export const Login = () =>(
    <>
     <div className={styles.loginContainer}>
      <img
        className={styles.image}
        src={image}
        alt="Login Background"
        srcSet={`${image} 1x, ${image} 2x`}
      />
      <div className={styles.overlayContent}>
        <LoginForm/>
      </div>
    </div>
    </>
)