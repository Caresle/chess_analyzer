export default function RecentGames() {
	return (
		<div className="border rounded-lg border-foreground-300 p-2 row-span-1 overflow-y-auto flex-1 flex flex-col gap-2">
			<h2 className="font-semibold text-2xl">Recent games</h2>
			<div className="flex flex-col gap-2 overflow-y-auto">
				{Array(10)
					.fill(0)
					.map((_, i) => (
						<div
							key={i}
							className="flex gap-2 items-center bg-neutral-800 p-2 rounded-lg"
						>
							TEST
						</div>
					))}
			</div>
		</div>
	)
}
