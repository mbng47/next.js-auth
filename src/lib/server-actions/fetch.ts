'use server'

export default async function fetchData(
    { path, headers, method, data, cache}:
    {
        cache?: RequestCache 
        path: string,
        headers?: object,
        method: string,
        data: object, 
    }) {
        
        const response = await fetch(path, {
            cache,
            method: method,
            headers: {
                ...headers,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const res = await response.json()
        console.log(res)

        if (res.error) throw new Error(res.data)

        // console.log(res)

        return res.data
    }   