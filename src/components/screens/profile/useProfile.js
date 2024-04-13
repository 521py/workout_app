import { useQuery } from '@tanstack/react-query'
import UserService from '../../../services/user.service'

export const useProfile = () => {
	return useQuery({
		queryKey: ['get profile'],
		queryFn: async () => {
			const response = await UserService.getProfile()
			return response
		},
		select: ({ data }) => data
	})
}
