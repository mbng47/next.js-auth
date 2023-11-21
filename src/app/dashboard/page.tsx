import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Main from '@/components/Dashboard'


export default () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    
    if (!token) redirect('/signin');
    
    return (<Main token={ token.value } />)
}