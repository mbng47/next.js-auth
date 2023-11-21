'use server'

import { cookies } from 'next/headers'

export default async () => {
    cookies().delete('token')
    cookies().delete('username')
    cookies().delete('email')
}