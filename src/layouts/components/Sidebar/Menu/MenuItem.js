import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import propTypes from 'prop-types'

import styles from './Menu.module.scss'
const cx = classNames.bind(styles)
function MenuItem({ to, title, icon, activeIcon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx("icon")}>{icon}</span>
            <span className={cx("active-icon")}>{activeIcon}</span>
            <span className={cx("title")}>{title}</span>
        </NavLink>
    )
}

MenuItem.propTypes = {
    to: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    icon: propTypes.node.isRequired,
    activeIcon: propTypes.node.isRequired,
}
export default MenuItem
