import { redirect } from 'next/navigation'
import RegisterForm from '@/components/user/RegisterForm'
import { cookies } from 'next/headers'

export default () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

	if (token) redirect('/dashboard');

    return (<RegisterForm />)
}