"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent
} from "@/components/ui/dropdown-menu"
import LogoutItem from "@/components/user/dropdown/LogoutItem"
import SettingsItem from "@/components/user/dropdown/SettingsItem"

export function UserDropdown({ username } : { username? : string }) {
    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline">
                <span>{ username }</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">

        <SettingsItem />
        <LogoutItem />
        </DropdownMenuContent>
    </DropdownMenu>
    )
}