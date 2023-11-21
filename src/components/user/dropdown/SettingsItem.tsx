import Link from 'next/link'
import {
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu"

export default () => {
    return (
        <DropdownMenuItem>
            <Link href='/settings'>
                Settings
            </Link>
        </DropdownMenuItem>
    )
}