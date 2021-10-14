import { Box, Stack } from "@chakra-ui/react"
import {
	RiContactsLine,
	RiDashboardLine,
	RiGitMergeLine,
	RiInputMethodLine
} from "react-icons/ri"
import { NavLink } from "./NavLink"

import { NavSection } from "./NavSection"

export function Sidebar() {
	return (
		<Box as="aside" w="64" mr="8">
			<Stack spacing="12" align="flex-start">
				<NavSection title="General">
					<NavLink icon={RiDashboardLine} linkName="Dashboard" />

					<NavLink icon={RiContactsLine} linkName="Users" />
				</NavSection>

				<NavSection title="Automation">
					<NavLink icon={RiInputMethodLine} linkName="Forms" />

					<NavLink icon={RiGitMergeLine} linkName="Automation" />
				</NavSection>
			</Stack>
		</Box>
	)
}
