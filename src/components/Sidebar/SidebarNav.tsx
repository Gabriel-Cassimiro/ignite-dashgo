import { Stack } from "@chakra-ui/react"
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine
} from "react-icons/ri"

import { NavSection } from "./NavSection"
import { NavLink } from "./NavLink"

export function SidebarNav() {
	return (
		<Stack spacing="12" align="flex-start">
			<NavSection title="General">
				<NavLink
					icon={RiDashboardLine}
					href="/dashboard"
					linkName="Dashboard"
				/>

				<NavLink icon={RiContactsLine} href="/users" linkName="Users" />
			</NavSection>

			<NavSection title="Automation">
				<NavLink icon={RiInputMethodLine} href="/forms" linkName="Forms" />

				<NavLink
					icon={RiGitMergeLine}
					href="/automation"
					linkName="Automation"
				/>
			</NavSection>
		</Stack>
	)
}
