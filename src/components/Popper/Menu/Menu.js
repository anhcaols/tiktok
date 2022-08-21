import { useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'

import styles from './Menu.module.scss'
import { Wrapper as WrapperPopper } from '~/components/Popper'
import MenuItem from './MenuItem'
import Header from './Header'

const cx = classNames.bind(styles)
const defaultFuc = () => {}
function Menu({ children, items = [], onChange = defaultFuc, hideOnClick = false }) {
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
                        } else {
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
            hideOnClick={hideOnClick}
            offset={[12, 8]}
            delay={[0, 500]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <WrapperPopper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1))
                                }}
                                title={current.title}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </WrapperPopper>
                </div>
            )}
            onHidden={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
}
export default Menu
