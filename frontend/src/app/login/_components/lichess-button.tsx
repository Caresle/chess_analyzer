export default function LichessButton() {
	const onClick = () => {
		alert("Lichess oauth for getting api info")
	}

	return (
		<div
			className="text-white font-bold p-2 border w-full max-w-[500px] bg-gray-500 border-gray-500 shadow rounded-lg text-2xl
            cursor-pointer hover:bg-gray-600 hover:border-gray-600 transition-all"
			onClick={onClick}
		>
			Lichess
		</div>
	)
}
