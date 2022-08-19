import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import styles from './Menu.module.scss'
import { Wrapper as WrapperPopper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)
function Menu({ children, items, onChange }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isCurrent = !!item.children
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isCurrent) {
                            setHistory((prev) => [...prev, item.children])
                        }
                        else {
                            onChange(item)
                        }
                    }}
                ></MenuItem>
            )
        })
    }
    return (
        <Tippy
            interactive
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper className={cx('menu-popper')}>
                        {history.length > 1 && <Header onBack ={() => {
                            setHistory((prev) => prev.slice(0, prev.length - 1))
                        }} />}
                        {renderItems()}
                    </WrapperPopper>
                </div>
            )}
            onHidden = {() => setHistory((prev) => prev.slice(0,1))}
        >
            {children}
        </Tippy>
    )
}

export default Menu
