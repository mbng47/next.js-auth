import Link from 'next/link'
import { ModeToggle } from './theme/ThemeSwitch'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Conditional from '@/components/utils/ConditionalRendering'
import { cookies } from 'next/headers'
import { UserDropdown } from '@/components/user/dropdown/UserDropdown'

const Navbar = () => {
	const cookieStore = cookies();

	const willShow = cookieStore.get('token') ? true : false;
	const usernameObj = cookieStore.get('username')
	const username = usernameObj?.value

	return (
		<nav className="sticky inset-x-0 top-0 z-30 h-14 border-b border-gray-200 backdrop-blur-lg transition-all">
				<div className="flex px-20 h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="z-40 flex font-semibold">
						<span>@guiDog</span>
					</Link>
					<Conditional showWhen={ !willShow }>
					<div className="hidden items-center space-x-4 sm:flex">
							<>
								<ModeToggle />
								<Link
									className={buttonVariants({
										variant: 'ghost',
										size: 'sm',
									})}
									href="/signin"
								>
									Sign in
								</Link>
								<Link
									className={buttonVariants({
										size: 'sm',
									})}
									href="/registration"
								>
									Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
								</Link>
							</>
						</div>
					</Conditional>
					<Conditional showWhen={ willShow }>
						<div>Hi Master <UserDropdown username={ username } /></div>
					</Conditional>
				</div>
		</nav>
	)
}

export default Navbar
