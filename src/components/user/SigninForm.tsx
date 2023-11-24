'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import formSchema from '@/lib/validations/user/user-signin-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import redirect from '@/lib/server-actions/redirect'
import Callout from '../utils/callout'

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
	const [alert, setAlert] = React.useState<{ error: boolean, message: string }>({ error: false, message: '' });

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

			if (res.err > 0) {
				console.log(res)
				setAlert({ error: true, message: res.data });
				return
			}
			
			setSessionCookie({ data: res.data })
			success = true


		} catch (err) {
			console.log(err)
			throw err
		}
		if (success) redirect('/dashboard')
	}

	const { error } = alert;
	return (
		<Form {...form} >
			{error && <Callout alert={alert} />}
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>User</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Pass</FormLabel>
							<FormControl>
								<Input type='password' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button variant="outline">Submit</Button>
			</form>
		</Form>
	)
}


