import React from "react";
import { motion } from "framer-motion";

import "./styles.css";

const GestureAnimation = () => {
	return (
		<React.Fragment>
			<div className="example-container">
				<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
			</div>
		</React.Fragment>
	);
};

export default GestureAnimation;
