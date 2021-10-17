import { Flex, Box, Avatar, Text } from "@chakra-ui/react"

interface ProfileProps {
	showProfileData: boolean | undefined
}

export function Profile({ showProfileData }: ProfileProps) {
	return (
		<Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Gabriel Guedes</Text>
					<Text color="gray.300" fontSize="small">
						gabriel@gmail.com
					</Text>
				</Box>
			)}
			<Avatar
				size="md"
				name="Gabiel Guedes"
				src="https://github.com/gabriel-cassimiro.png"
			/>
		</Flex>
	)
}
