import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from '../../../../src/components/screens/home/Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'

function Home() {
	const { isAuth } = useAuth()

	const navigate = useNavigate()

	return (
		<>
			<Layout bgImage='../../../../public/images/home-bg.jpeg'>
				<Button
					clickHandler={() => navigate(isAuth ? '/new-workout' : '/auth')}
				>
					{isAuth ? 'New' : 'Sign in'}
				</Button>
				<h1 className={styles.heading}>Exercises for the shoulders</h1>
				{/* TODO: Counters */}
			</Layout>
		</>
	)
}

export default Home
