import { useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'

import Layout from '../../layout/Layout'

import styles from '../../../../src/components/screens/home/Home.module.scss'
import Statistics from '../profile/statistics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<>
			<Layout bgImage='../../../../public/images/home-bg.jpeg'>
				<Button clickHandler={() => navigate('/new-workout')}>New</Button>
				<h1 className={styles.heading}>Exercises for the shoulders</h1>
				{/* TODO: Counters */}
				<Statistics />
			</Layout>
		</>
	)
}

export default Home
