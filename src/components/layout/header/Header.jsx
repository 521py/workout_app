import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router-dom'

import Hamburger from '../hamburger/Hamburger'

import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth'

const Header = ({ backLink = '/' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<header className={styles.header}>
			{isAuth && (
				<>
					{pathname === '/' && isAuth ? (
						<button
							onClick={() => {
								navigate('/profile')
							}}
						>
							<SlUser fill='#fff' fontSize={25} />
						</button>
					) : (
						<button
							onClick={() => {
								navigate(isAuth ? backLink : '/auth')
							}}
						>
							<IoMdArrowBack fill='#fff' fontSize={29} />
						</button>
					)}
					<Hamburger />
				</>
			)}
		</header>
	)
}

export default Header
