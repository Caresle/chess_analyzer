import { Button } from "@heroui/react"

export default function PricingSection() {
	return (
		<section>
			<h2>Pricing</h2>
			<div>
				<h3>Normal Plan</h3>
				<Button>Get Started</Button>
			</div>
			<div>
				<h3>Premium Plan</h3>
				<Button color="primary">Get Started</Button>
			</div>
		</section>
	)
}
