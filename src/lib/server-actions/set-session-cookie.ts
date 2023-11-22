'use server'

import { cookies } from 'next/headers'

export default async function setSessionCookie(
    { data }:
    { data: {
        token: string,
        username: string,
        email: string
    }}) {
        cookies().set('token', data.token)
        cookies().set('username', data.username)
        cookies().set('email', data.email)
    }   