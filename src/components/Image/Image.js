import classNames from 'classnames'
import { forwardRef } from 'react'
import { useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

function Image({ src, alt, fallback, className, ...props }, ref) {
    const [_fallback, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(fallback ? fallback : images.noImage)
    }
    return (
        <img
            className={classNames(styles.wrapper, className)}
            src={src || _fallback}
            ref={ref}
            alt="img"
            {...props}
            onError={handleError}
        />
    )
}

export default forwardRef(Image)
