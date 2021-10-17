import {
	Box,
	Flex,
	Heading,
	Divider,
	Button,
	SimpleGrid,
	VStack,
	HStack
} from "@chakra-ui/react"

import Link from "next/link"

import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

export default function CreateUser() {
	return (
		<Box>
			<Header />
			<Flex w="90%" my="6" mx="auto" p={["6", "8"]}>
				<Sidebar />
				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
					<Heading size="lg" fontWeight="normal">
						Create users
					</Heading>

					<Divider my="6" borderColor="GrayText.700" />

					<VStack spacing={["6", "8"]}>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="name" label="Full Name" />
							<Input name="email" type="email" label="E-mail" />
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input name="password" type="password" label="Password" />
							<Input
								name="password_confirmation"
								type="password"
								label="Retype Password"
							/>
						</SimpleGrid>
					</VStack>

					<Flex mt="8" justify="flex-end">
						<HStack spacing="4">
							<Link href="/users" passHref>
								<Button as="a" colorScheme="whiteAlpha">
									Cancel
								</Button>
							</Link>
							<Button colorScheme="pink">Save</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
