import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

const Drag = () => {
	const constraintsRef = React.useRef(null);

	return (
		<div className="flex items-center justify-center bg-gradient-to-t from-pink-200 via-pink-400 to-pink-700 min-h-screen w-full drag-container">
			<motion.div className="drag-area" ref={constraintsRef} />
			<motion.div
				className="flex items-center justify-center cursor-pointer"
				drag
				dragConstraints={constraintsRef}>
				<p className="font-semibold text-blue-600 text-md text-center">
					You can keep your content here.
				</p>
			</motion.div>
		</div>
	);
};

export default Drag;
