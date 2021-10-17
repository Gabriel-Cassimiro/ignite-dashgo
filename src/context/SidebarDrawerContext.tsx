import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react"
import { createContext, ReactNode, useContext, useEffect } from "react"
import { useRouter } from "next/router"

interface SidebarDrawerContextProviderProps {
	children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerContextProvider({
	children
}: SidebarDrawerContextProviderProps) {
	const disclosure = useDisclosure()

	const { asPath } = useRouter()

	useEffect(() => {
		disclosure.onClose()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [asPath]) //Route.asPath caminho da rota

	return (
		<SidebarDrawerContext.Provider value={disclosure}>
			{" "}
			{children}{" "}
		</SidebarDrawerContext.Provider>
	)
}

export function useSidebarDrawerContext() {
	return useContext(SidebarDrawerContext)
}
