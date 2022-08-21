import PropTypes from 'prop-types'
import classNames from 'classnames'
import { forwardRef } from 'react'
import { useState } from 'react'
import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(
    ({ src, alt, fallback, className, ...props }, ref) => {
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
)

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
    className: PropTypes.string,
}
export default Image
