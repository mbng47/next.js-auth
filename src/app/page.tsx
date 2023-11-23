import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
export default function Home() {

	const subMainClasses =
		'mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'

	return (
		<>
			<h1 className="text-5xl, max-w-4xl font-bold md:text-6xl lg:text-7xl">
				Welcome to mega super application by <span className="text-green-600">@mbng47</span>
			</h1>
			<p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
				You can either log in or be without it or just either
			</p>
			<Link
				className={buttonVariants({
					size: 'lg',
					className: 'mt-5',
				})}
				href="/registration"
				target="_blank"
			>
				C'mon man
			</Link>
		</>
	)
}