import { Flex, Input, Icon } from "@chakra-ui/react"
import { RiSearchLine } from "react-icons/ri"

export function SearchBox() {
	return (
		<Flex
			as="label"
			py="4"
			px="8"
			ml="6"
			maxWidth="500"
			align="center"
			color="gray.200"
			position="relative"
			bg="gray.800"
			borderRadius="full"
		>
			<Input
				color="gray.50"
				variant="unstyled"
				px="4"
				mr="4"
				placeholder="Search"
				_placeholder={{
					color: "gray.400"
				}}
			/>
			<Icon as={RiSearchLine} fontSize="24" />
		</Flex>
	)
}
