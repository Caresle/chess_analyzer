import React from "react"
import { HeroUIProvider } from "@heroui/react"
export default function HeroProvider({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<HeroUIProvider>
			<div className="dark text-foreground bg-background">{children}</div>
		</HeroUIProvider>
	)
}
