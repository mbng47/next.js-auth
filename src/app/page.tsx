import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/button'
export default function Home() {
	return (
		<>
				<h1 className="text-5xl, max-w-4xl font-bold md:text-6xl lg:text-7xl">
					Welcome to mega super application by <span className="text-green-600">@mbng47</span>
				</h1>
				<p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
					You can either log in or be without it or just either
				</p>
		</>
	)
}