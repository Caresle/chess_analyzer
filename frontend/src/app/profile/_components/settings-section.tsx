import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react"
import Icons from "../../../components/shared/icons"

export default function SettingsSection() {
	return (
		<Card>
			<CardHeader>
				<div>Settings</div>

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
				<div className="flex flex-col gap-2">
					<div className="flex gap-2 items-center">
						<Input placeholder="Username" label="Username" />
						<Input placeholder="Email" label="Email" type="email" />
					</div>
					<div>
						<Button startContent={<Icons.Actions.View className="size-5" />}>
							Change Password
						</Button>
					</div>
				</div>

				<div className="border p-2 border-red-500 rounded-lg dark:bg-red-950/25 mt-2 flex flex-col gap-2 w-1/3 mx-auto max-w-[500px]">
					<h1 className="font-semibold text-red-500 text-xl">Danger Zone</h1>
					<Button
						color="danger"
						startContent={<Icons.Actions.Delete className="size-5" />}
					>
						Delete Account
					</Button>
				</div>
			</CardBody>
		</Card>
	)
}
