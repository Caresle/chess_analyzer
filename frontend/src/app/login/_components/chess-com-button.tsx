export default function ChessComButton() {
	const onClick = () => {
		alert("Chess.com oauth for getting api info")
	}

	return (
		<div
			className="text-white font-bold p-2 border w-full max-w-[500px] bg-green-600 border-green-600 shadow rounded-lg text-2xl
            transition-all hover:bg-green-700 cursor-pointer hover:border-green-700"
			onClick={onClick}
		>
			Chess.com
		</div>
	)
}
