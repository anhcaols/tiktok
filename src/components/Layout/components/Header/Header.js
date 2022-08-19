import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import Menu from '~/components/Popper/Menu'
import styles from './Header.module.scss'
import images from '~/components/assets/images'
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faRightToBracket,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

import { Wrapper as WrapperPopper } from '~/components/Popper'
import { AccountItem } from '~/components/AccountItem'
import Button from '~/components/Button'

const cx = classNames.bind(styles)
const currentUser = true
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
        title: 'Language',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'Language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'Language',
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts',
    },
]

const USER_MENU = [
    {
        icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
        title: 'View profile',
        to: '/@rose',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightToBracket}></FontAwesomeIcon>,
        title: 'Log out',
        to: '/logout',
        separate : true
    },
]
// handle event
const handleMenuChange = (item) => {
    console.log(item)
    switch (item.type) {
        case 'Language':
            break
        default:
    }
}
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img className={cx('logo')} src={images.logo} alt="logo" />
                <HeadlessTippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <WrapperPopper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </WrapperPopper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                    <Button className={cx('upload-btn')} upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/3ce6eeec0b8f3f70188f4c40878ffedf.jpeg?x-expires=1661054400&x-signature=CZKQZ%2Bm08OxEWN9BJ90F%2F7uv3tQ%3D"
                                alt="img"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Header
