import {  faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from "./Menu.module.scss"

const cx = classNames.bind(styles)
function Header({onBack}) {
    return <div>
        <header className={cx("header")}>
            <button onClick={onBack} className={cx("back-btn")}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <h4 className={cx("header-title")}>
                Language
            </h4>
        </header>
    </div>
}

export default Header
