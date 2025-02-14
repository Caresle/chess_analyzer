import { Card, CardBody } from "@heroui/react"
import OverviewCard from "./general/overview-card"
import RecentGames from "./general/recent-games"
import BestGames from "./general/best-games"

export default function GeneralSection() {
	return (
		<Card className="flex-1 overflow-y-auto flex flex-col">
			<CardBody>
				<div className="flex-1 grid grid-cols-12 gap-2 overflow-y-auto">
					<OverviewCard />
					<div className="grid gap-2 grid-rows-2 col-span-4 overflow-auto flex-1">
						<RecentGames />
						<BestGames />
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
