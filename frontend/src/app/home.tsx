import HeaderSection from "./_components/header-section"
import AboutSection from "./_components/about-section"
import GettingStarted from "./_components/getting-started"
import PricingSection from "./_components/pricing-section"
import FaqSection from "./_components/faq-section"

export default function HomePage() {
	return (
		<main className="h-screen w-full flex flex-col items-center p-2 gap-2">
			<HeaderSection />
			<AboutSection />
			<GettingStarted />
			<PricingSection />
			<FaqSection />
		</main>
	)
}
