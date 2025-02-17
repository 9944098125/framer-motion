import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

const GestureAnimation = () => {
	return (
		<React.Fragment>
			<div className="w-full min-h-screen flex flex-col items-center justify-center space-y-10 bg-gradient-to-t from-blue-600 via-green800 to-blue-50">
				<h1 className="text-blue-800 text-4xl font-bold">Gesture Animation</h1>
				<div className="gesture-container">
					<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.8 }} />
				</div>
			</div>
		</React.Fragment>
	);
};

export default GestureAnimation;
