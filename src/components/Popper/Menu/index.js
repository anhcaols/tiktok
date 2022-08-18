import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import styles from './Menu.module.scss'
import { Wrapper as WrapperPopper } from '~/components/Popper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)
function Menu({ children, items }) {
    const renderItems = () => {
        return items.map((item, index) => 
            <MenuItem key={index} data={item}></MenuItem>
        )
    }
    return (
        <Tippy
            interactive
            // visible
            delay={[0, 1000]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper className={cx("menu-popper")}>
                        {renderItems()}
                    </WrapperPopper>
                </div>
            )}
        >
            {children}
            
        </Tippy>
    )
}

export default Menu
