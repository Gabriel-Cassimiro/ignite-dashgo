import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react"
import { RiMenuLine } from "react-icons/ri"

import { useSidebarDrawerContext } from "../../context/SidebarDrawerContext"
import { Logo } from "../Header/Logo"
import { NotificationsNav } from "../Header/NotificationsNav"
import { Profile } from "../Header/Profile"
import { SearchBox } from "../Header/SearchBox"

export function Header() {
	const { onOpen } = useSidebarDrawerContext()

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true
	})

	return (
		<Flex as="header" w="90%" h="20" mx="auto" mt="4" px="6" align="center">
			{!isWideVersion && (
				<IconButton
					aria-label="Open Navigation"
					icon={<Icon as={RiMenuLine} />}
					fontSize="24"
					variant="unstyled"
					onClick={onOpen}
					mr="2"
				></IconButton>
			)}

			<Logo />

			{isWideVersion && <SearchBox />}

			<Flex align="center" ml="auto">
				<NotificationsNav />
				<Profile showProfileData={isWideVersion} />
			</Flex>
		</Flex>
	)
}
