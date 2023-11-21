'use client'

import fetch from '@/lib/server-actions/fetch'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import redirect from '@/lib/server-actions/redirect'
import deleteSessionCookie from '@/lib/server-actions/delete-session-cookie'

export default ({ token }: { token: string }) => {
    const [user, setUser] = useState('');

    const headers = {
        'Authorization': `Bearer ${token}`,
    }

    async function updateUser() {
        const results = await fetch({
            path: 'http://localhost:3005/api/v1/services/protected',
            method: 'post',
            headers,
            cache: 'no-store',
            data: {}
        })

        if (results.err) {
            deleteSessionCookie()
            redirect('/signin')
        }

        setUser(results.data.ok.toString())    
    }

    return (
        <div>
            <p>{ user }</p>
            <Button onClick={ updateUser }> Update User </Button>
        </div>
    )
}