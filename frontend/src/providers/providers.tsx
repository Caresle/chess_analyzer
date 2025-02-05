import HeroProvider from "./hero-provider"

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<HeroProvider>{children}</HeroProvider>
		</div>
	)
}
