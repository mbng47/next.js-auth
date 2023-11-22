'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import formSchema from '@/lib/validations/user/user-signin-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import redirect from '@/lib/server-actions/redirect'

import setSessionCookie from '@/lib/server-actions/set-session-cookie'

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import fetch from '@/lib/server-actions/fetch'

export default function SigninForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: ''
		},
	})

	async function onSubmit(values: z.infer<typeof formSchema>) {
		let success = false;

		try {
			const res = await fetch({
				path: 'http://localhost:3005/api/v1/services/auth',
				method: 'post',
				data: values,
				cache: 'no-store'
			})

			console.log(res)
			if (res.error) throw res.data
			setSessionCookie({data: res.data })
			success = true
		} catch (err) {
			console.log(err)
		}
		if (success) redirect('/dashboard')
	}

	return (
		<Form {...form } >
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="shadcn" {...field} />
							</FormControl>
							<FormDescription>
								This is your public display name.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
                <FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type='password' {...field} />
							</FormControl>
							<FormDescription>
								Type a password
                            </FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}


