import * as z from 'zod'

export default z.object({
	username: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
	password: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters',
		})
		.max(50, {
			message: 'Username cannot be longer than 50 characters',
		}),
})