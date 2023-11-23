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
		<nav className="sticky inset-x-0 top-0 z-30 h-14 backdrop-blur-lg transition-all">
				<div className="flex px-20 h-14 items-center justify-between">
					<Link href="/" className="z-40 flex font-semibold">
					</Link>
					<Conditional showWhen={ !willShow }>
					<div className="hidden items-center space-x-4 sm:flex">
							<>
								<ModeToggle />
								<Link
									className={buttonVariants({
										variant: 'link',
										size: 'sm',
									})}
									href="/signin"
								>
									Sign in
								</Link>
								<h2>|</h2>
								<Link
									className={buttonVariants({
										variant: 'link',
										size: 'sm',
									})}
									href="/registration"
								>
									Register
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
