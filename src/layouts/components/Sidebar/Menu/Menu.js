import classNames from 'classnames/bind'
import propTypes from "prop-types"

import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function Menu({ children }) {
    return <nav className={cx('menu')}>{children}</nav>
}

Menu.propTypes = {
    children: propTypes.node.isRequired
}
export default Menu
