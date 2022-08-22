import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
} from '~/components/Icons'
import Menu, { MenuItem } from './Menu'
import config from '~/config'
const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('container')}>
            <Menu>
                <MenuItem
                    to={config.routes.home}
                    title={'For You'}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    to={config.routes.following}
                    title={'Following'}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title={'LIVE'} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    )
}

export default Sidebar
