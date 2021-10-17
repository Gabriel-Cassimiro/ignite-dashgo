import {
	Box,
	Flex,
	Heading,
	Button,
	Icon,
	Table,
	Thead,
	Tbody,
	Th,
	Tr,
	Td,
	Checkbox,
	Text,
	useBreakpointValue
} from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import Link from "next/link"

import { Header } from "../../components/Header"
import { Pagination } from "../../components/Pagination"
import { Sidebar } from "../../components/Sidebar"

export default function UserList() {
	const isWideVersion = useBreakpointValue({
		base: false,
		md: true
	})

	return (
		<Box>
			<Header />
			<Flex my="6" mr="auto" px={["4", "4", "6"]} boxSizing="border-box">
				<Sidebar />
				<Box flex="1" bg="gray.800" p="6">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">
							Users
						</Heading>

						<Link href="/users/create" passHref>
							<Button
								as="a"
								size="sm"
								fontSize="sm"
								colorScheme="pink"
								leftIcon={<Icon as={RiAddLine} fontSize="24" />}
							>
								Create a new user
							</Button>
						</Link>
					</Flex>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th></Th>
								<Th>Users</Th>
								{isWideVersion && <Th>Register date</Th>}
								<Th></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Gabriel Guedes</Text>
										<Text fontSize="sm" color="gray.300">
											gabriel@gmail.com
										</Text>
									</Box>
								</Td>
								{isWideVersion && <Td>24 april, 2021</Td>}
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="purple"
										leftIcon={<Icon as={RiPencilLine} fontSize="24" />}
									>
										Edit
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Pagination />
				</Box>
			</Flex>
		</Box>
	)
}
