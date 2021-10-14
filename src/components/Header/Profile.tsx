import { Flex, Box, Avatar, Text } from "@chakra-ui/react"
export function Profile() {
	return (
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
	)
}
