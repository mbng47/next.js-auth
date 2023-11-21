'use server'

import { redirect } from 'next/navigation'

export default async (path: string) => redirect(path)