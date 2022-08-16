import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/205d4812d9f51f6bc23308d18580f805~c5_100x100.jpeg?x-expires=1660813200&x-signature=jyZomJYXqrwt7qBzRUAuOwQOD%2FQ%3D' alt='img' />
        <div className={cx('info')} >
            <h4 className={cx('name')}>
                <span>hoahoang204</span>
                <FontAwesomeIcon  className={cx('icon')}  icon = {faCheckCircle} />
            </h4>
            <span className={cx('user-name')}>Hoàng Liên Hoa</span>
        </div>
    </div>
}

export default AccountItem
