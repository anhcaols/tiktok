import { faSleigh } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    className,
    leftIcon,
    rightIcon,
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled,
    rounded = false,
    small = false,
    large = false,
    children,
    onClick,
    ...passProp
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProp,
    }
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }
    if(disabled) {
        Object.keys(props).forEach((key) => {
            if(key.startsWith("on") && typeof props[key] === "function" ){
                delete props[key]
            }
        })
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        rounded,
        text,
        small,
        large,
        
    })
    return (
        <Comp className={classes} {...props}>
            <span className={cx("title")}>{children}</span>
        </Comp>
    )
}

export default Button
