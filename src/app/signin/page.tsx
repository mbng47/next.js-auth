import SigninForm from '@/components/user/SigninForm'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');

	if (token) redirect('/dashboard');
	
    return (<SigninForm />)
}