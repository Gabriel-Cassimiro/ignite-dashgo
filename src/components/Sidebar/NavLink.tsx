import {
	Link,
	Icon,
	Text,
	LinkProps as ChakraLinkProps
} from "@chakra-ui/react"
import { IconType } from "react-icons"

interface NavLinkProps extends ChakraLinkProps {
	icon: IconType
	linkName: string
}

export function NavLink({ icon, linkName, ...rest }: NavLinkProps) {
	return (
		<Link display="flex" alignItems="center" {...rest}>
			<Icon as={icon} fontSize="24" />
			<Text ml="4" fontWeight="medium">
				{linkName}
			</Text>
		</Link>
	)
}
