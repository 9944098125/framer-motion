import React, { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

const Switch = () => {
	const [isOn, setIsOn] = useState(false);

	const toggleSwitch = () => setIsOn(!isOn);

	const spring = {
		type: "spring",
		stiffness: 800,
		damping: 10,
	};

	return (
		<React.Fragment>
			<div className="w-full h-screen flex items-center justify-center">
				<div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
					<motion.div className="handle" layout transition={spring} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Switch;
