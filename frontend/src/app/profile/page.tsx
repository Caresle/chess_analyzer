import { Tab, Tabs } from "@heroui/react"
import Icons from "../../components/shared/icons"
import SettingsSection from "./_components/settings-section"
import SyncSection from "./_components/sync-section"
import GeneralSection from "./_components/general-section"

export default function ProfilePage() {
	return (
		<div className="h-screen w-full p-2 flex flex-col overflow-y-auto">
			<Tabs color="primary">
				<Tab
					className="flex-1 flex overflow-y-auto"
					key="general"
					title={
						<div className="flex items-center gap-2">
							<Icons.Actions.SortHorizontal className="size-5" />
							General
						</div>
					}
				>
					<GeneralSection />
				</Tab>
				<Tab
					key="sync"
					title={
						<div className="flex items-center gap-2">
							<Icons.Actions.Auth className="size-5" />
							Sync
						</div>
					}
				>
					<SyncSection />
				</Tab>
				<Tab
					key="settings"
					title={
						<div className="flex items-center gap-2">
							<Icons.Misc.Settings className="size-5" />
							Settings
						</div>
					}
				>
					<SettingsSection />
				</Tab>
			</Tabs>
		</div>
	)
}
