import cn from 'clsx'

import styles from './Alert.module.scss'

const alert = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}

export default alert
