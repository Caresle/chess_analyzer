import { Button } from "@heroui/react"

export default function HeaderSection() {
	return (
		<section className="flex flex-col items-center">
			<h1 className="font-bold text-2xl">Welcome to Chess Analyzer</h1>
			<p className="text-slate-500 font-semibold text-center">
				Get a general overview of your chess performance
			</p>
			<div className="flex items-center gap-2">
				<Button>About</Button>
				<Button color="primary">Getting Started</Button>
			</div>
		</section>
	)
}
