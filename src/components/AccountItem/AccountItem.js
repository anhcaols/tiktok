import { Link } from 'react-router-dom'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import Image from '../Image/Image'

const cx = classNames.bind(styles)
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.nickname}</span>
                    { data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('user-name')}>{data.full_name}</span>
            </div>
        </Link>
    )
}

export default AccountItem
