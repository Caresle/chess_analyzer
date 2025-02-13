import { Button, Card, CardBody, CardHeader } from "@heroui/react"
import Icons from "../../../components/shared/icons"

export default function SyncSection() {
	return (
		<Card>
			<CardHeader>
				<div>Sync</div>
				<div className="flex justify-end gap-2 w-full">
					<Button
						color="primary"
						startContent={<Icons.Actions.Save className="size-5" />}
					>
						Save
					</Button>
				</div>
			</CardHeader>
			<CardBody>
				<div className="flex gap-2">
					<div>
						<Button className="bg-white text-black font-semibold border border-black dark:border-white">
							Sync with Lichess Account
						</Button>
					</div>
					<div>
						<Button className="bg-emerald-500 text-white font-semibold border border-emerald-500 ">
							Sync with Chess.com Account
						</Button>
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
