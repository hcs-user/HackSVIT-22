import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
function BackToTop() {
	const [isScrolled, setIsScrolled] = useState(false);
	useEffect(() => {
		setInterval(() => {
			window.scrollY > 20 ? setIsScrolled(true) : setIsScrolled(false);
		});
	});
	return (
		<Button
			position={"fixed"}
			display={isScrolled ? "block" : "none"}
			bottom={[2, null, 10]}
			right={[2, null, 8]}
			onClick={() => window.scrollTo(0, 0)}
			p={[2, null, 3]}
			zIndex={1}
		>
			<BiUpArrowAlt />
		</Button>
	);
}

export default BackToTop;
