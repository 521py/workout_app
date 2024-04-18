import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import WorkoutLogService from '../../../../services/workout/workout-log.service'
import WorkoutService from '../../../../services/workout/workout.service'

export const useWorkouts = () => {
	const navigate = useNavigate()

	const { data, isSuccess } = useQuery({
		queryKey: ['getWorkouts'],
		queryFn: () => WorkoutService.getAll(),
		select: data => data
	})

	const createWorkoutLogMutation = useMutation({
		mutationFn: workoutId => WorkoutLogService.create(workoutId),
		onSuccess: ({ data }) => {
			navigate(`/workout/${data.id}`)
		}
	})

	const {
		mutate: createWorkoutLog,
		isLoading: createWorkoutLogLoading,
		isSuccess: createWorkoutLogSuccess,
		error: createWorkoutLogError
	} = createWorkoutLogMutation

	// Проверяем, что data существует и является массивом
	if (!data || !Array.isArray(data)) {
		return <div>Loading...</div>
	}

	return {
		data,
		isSuccess,
		createWorkoutLog,
		createWorkoutLogLoading,
		createWorkoutLogSuccess,
		createWorkoutLogError
	}
}
