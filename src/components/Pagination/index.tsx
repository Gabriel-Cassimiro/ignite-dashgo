import { HStack, Button, Box } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

export function Pagination() {
	return (
		<HStack mt="8" justify="space-between" align="center">
			<Box>
				<strong>0</strong> - <strong>10</strong> de <strong>100</strong>
			</Box>
			<HStack spacing="2">
				<PaginationItem isCurrent={true} pageNumber="1" />
				<PaginationItem pageNumber="2" />
				<PaginationItem pageNumber="3" />
			</HStack>
		</HStack>
	)
}
