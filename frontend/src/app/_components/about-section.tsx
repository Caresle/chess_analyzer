import React from "react"

const AboutCard = ({
	header,
	children,
}: {
	header: string
	children?: React.ReactNode
}) => {
	return (
		<div className="bg-black p-2 rounded-lg border w-full">
			<h3 className="font-semibold text-center">{header}</h3>
			<p className="text-slate-500 text-center">{children}</p>
		</div>
	)
}

export default function AboutSection() {
	return (
		<section className="w-full p-2">
			<h2 className="font-semibold text-xl text-center">About</h2>
			<div className="grid grid-cols-1 w-full place-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
				<AboutCard header="What is Chess Analyzer?">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					suscipit exercitationem quis in quam nihil velit magnam. Et
					necessitatibus dolores reiciendis id laudantium eveniet, quia,
					mollitia quasi aliquam cupiditate atque?
				</AboutCard>
				<AboutCard header="How does it work?">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					suscipit exercitationem quis in quam nihil velit magnam. Et
					necessitatibus dolores reiciendis id laudantium eveniet, quia,
					mollitia quasi aliquam cupiditate atque?
				</AboutCard>
				<AboutCard header="How can I use it?">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
					suscipit exercitationem quis in quam nihil velit magnam. Et
					necessitatibus dolores reiciendis id laudantium eveniet, quia,
					mollitia quasi aliquam cupiditate atque?
				</AboutCard>
			</div>
		</section>
	)
}
