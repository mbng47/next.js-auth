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
    email: z
		.string()
		.min(2, {
			message: 'Email must be at least 2 characters',
		})
		.max(50, {
			message: 'Email cannot be longer than 50 characters',
		}),
    firstname: z
		.string()
		.min(2, {
			message: 'Firstname must be at least 2 characters',
		})
		.max(50, {
			message: 'Firstname cannot be longer than 50 characters',
		}),
    lastname: z
		.string()
		.min(2, {
			message: 'Lastname must be at least 2 characters',
		})
		.max(50, {
			message: 'Lastname cannot be longer than 50 characters',
		}),
})