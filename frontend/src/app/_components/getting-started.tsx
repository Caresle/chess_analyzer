import { Button } from "@heroui/react"

export default function GettingStarted() {
	return (
		<section className="w-full flex flex-col items-center gap-2 p-2">
			<h2 className="text-2xl font-bold text-center">Getting Started</h2>
			<div className="p-2 rounded-lg w-full flex flex-col gap-2 min-h-[20vh] justify-evenly max-w-[500px]">
				<h3 className="text-xl font-semibold">How to install?</h3>
				<div className="w-full flex flex-col gap-2 items-center">
					<p>
						For a local installation, please follow the next link for more info:
					</p>
					<Button color="primary">Install</Button>
				</div>
			</div>
		</section>
	)
}
