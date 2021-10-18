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
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link"

import { Input } from "../../components/Form/Input"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"

type CreateUserFormData = {
	name: string
	email: string
	password: string
	passwordConfirmation: string
}

const CreateUserFormSchema = yup.object().shape({
	name: yup.string().required("Name is required"),
	email: yup.string().required().email("E-mail is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(6, "Password must be at least 6 characters"),
	passwordConfirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "Passwords must match")
})

export default function CreateUser() {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(CreateUserFormSchema)
	})

	const { errors } = formState

	const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
		await new Promise(resolve => setTimeout(resolve, 500))
	}

	return (
		<Box>
			<Header />
			<Flex w="90%" my="6" mx="auto" p={["6", "8"]}>
				<Sidebar />
				<Box
					as="form"
					flex="1"
					borderRadius="8"
					bg="gray.800"
					p="8"
					onSubmit={handleSubmit(handleCreateUser)}
				>
					<Heading size="lg" fontWeight="normal">
						Create users
					</Heading>

					<Divider my="6" borderColor="GrayText.700" />

					<VStack spacing={["6", "8"]}>
						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								error={errors.name}
								{...register("name")}
								label="Full Name"
							/>
							<Input
								error={errors.email}
								{...register("email")}
								type="email"
								label="E-mail"
							/>
						</SimpleGrid>

						<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
							<Input
								error={errors.password}
								{...register("password")}
								type="password"
								label="Password"
							/>
							<Input
								error={errors.passwordConfirmation}
								{...register("passwordConfirmation")}
								type="password"
								label="Confirm Password"
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
							<Button
								type="submit"
								isLoading={formState.isSubmitting}
								colorScheme="pink"
							>
								Save
							</Button>
						</HStack>
					</Flex>
				</Box>
			</Flex>
		</Box>
	)
}
