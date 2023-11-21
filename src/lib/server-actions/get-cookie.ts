import { cookies } from 'next/headers'


export default async () => {
    const cookieStore = cookies();
    const token = cookieStore.get('token');
}