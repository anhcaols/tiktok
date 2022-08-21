import classNames from "classnames/bind"
import styles from "./Sidebar.module.scss"

const cx = classNames.bind(styles)
function Sidebar() {
    return (
        <div className={cx("container")}>
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
