import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react"
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"

export function Header() {
	return (
		<Flex as="header" w="90%" h="20" mx="auto" mt="4" px="6" align="center">
			<Text fontSize="3xl" fontWeight="bold" w="64">
				dashgo
				<Text as="span" ml="1" color="pink.500">
					.
				</Text>
			</Text>
			<Flex
				as="label"
				py="4"
				px="8"
				ml="6"
				maxWidth="500"
				alignSelf="center"
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
			<Flex align="center" ml="auto">
				<HStack
					mx="8"
					spacing="8"
					pr="8"
					py="1"
					color="gray.300"
					borderRightWidth={1}
					borderColor="gray.700"
				>
					<Icon as={RiNotificationLine} fontSize="24" />
					<Icon as={RiUserAddLine} fontSize="24" />
				</HStack>
				<Flex align="center">
					<Box mr="4" textAlign="right">
						<Text>Gabriel Guedes</Text>
						<Text color="gray.300" fontSize="small">
							gabriel@gmail.com
						</Text>
					</Box>
					<Avatar
						size="md"
						name="Gabiel Guedes"
						src="https://github.com/gabriel-cassimiro.png"
					/>
				</Flex>
			</Flex>
		</Flex>
	)
}
