import {
	Link as ChakraLink,
	Icon,
	Text,
	LinkProps as ChakraLinkProps
} from "@chakra-ui/react"
import { IconType } from "react-icons"
import Link from "next/link"

import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
	icon: IconType
	linkName: string
	href: string
}

export function NavLink({ href, icon, linkName, ...rest }: NavLinkProps) {
	return (
		<ActiveLink href={href} passHref>
			<ChakraLink display="flex" alignItems="center" {...rest}>
				<Icon as={icon} fontSize="24" />
				<Text ml="4" fontWeight="medium">
					{linkName}
				</Text>
			</ChakraLink>
		</ActiveLink>
	)
}
