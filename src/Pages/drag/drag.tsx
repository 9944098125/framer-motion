import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

const Drag = () => {
	const constraintsRef = React.useRef(null);

	return (
		<React.Fragment>
			<div className="h-screen flex items-center justify-center bg-gradient-to-t from-pink-200 via-pink-400 to-pink-700 overflow-hidden w-full drag-container">
				<motion.div className="drag-area" ref={constraintsRef} />
				<motion.div
					className="flex items-center justify-center cursor-pointer"
					drag
					dragConstraints={constraintsRef}>
					<p className="font-semibold text-blue-600 text-md text-center">
						You content goes here
					</p>
				</motion.div>
			</div>
		</React.Fragment>
	);
};

export default Drag;
