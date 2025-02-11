import { Button, Input } from "@heroui/react"
import ChessComButton from "./_components/chess-com-button"
import LichessButton from "./_components/lichess-button"

const LoginForm = () => {
	return (
		<form className="p-2 bg-white/25 max-w-[500px] w-full rounded-lg flex flex-col gap-2">
			<Input placeholder="Username" label="Username" />
			<Input placeholder="Password" label="Password" type="password" />
			<Button color="primary">Login</Button>
		</form>
	)
}

export default function LoginPage() {
	return (
		<div className="p-2 bg-slate-900 h-screen w-full flex flex-col gap-2 justify-center">
			<h1 className="text-2xl font-bold uppercase text-center text-white">
				Chess Analyzer
			</h1>
			<div className="flex flex-col items-center justify-center gap-2">
				<LoginForm />
				<LichessButton />
				<ChessComButton />
			</div>
		</div>
	)
}
