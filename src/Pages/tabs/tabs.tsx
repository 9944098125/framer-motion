import "./styles.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { motion, AnimatePresence } from "framer-motion";

export default function Tabs() {
	const [selectedTab, setSelectedTab] = useState(tabs[0]);

	return (
		<div className="min-h-screen w-full flex flex-col space-y-2 justify-center items-center bg-gradient-to-t from-green-50 via-green-300 to-green-700">
			<div className="window w-[70%]">
				<ul className="w-full flex justify-center space-x-6 rounded-lg mt-9">
					{tabs.map((item) => (
						<li
							key={item.label}
							className={
								item === selectedTab
									? "bg-gray-500 text-white px-4 py-4 rounded-tl-md rounded-tr-md"
									: "px-4 py-4 rounded-tl-md rounded-tr-md"
							}
							onClick={() => setSelectedTab(item)}>
							{`${item.icon} ${item.label}`}
							{item === selectedTab ? (
								<motion.div className="underline" layoutId="underline" />
							) : null}
						</li>
					))}
				</ul>
				<main>
					<AnimatePresence mode="wait">
						<motion.i
							style={{
								fontSize: "200px",
								marginBottom: "-100px",
								fontStyle: "normal",
							}}
							key={selectedTab ? selectedTab.label : "empty"}
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -10, opacity: 0 }}
							transition={{ duration: 0.2 }}>
							{selectedTab ? selectedTab.icon : "😋"}
						</motion.i>
					</AnimatePresence>
				</main>
			</div>
		</div>
	);
}
