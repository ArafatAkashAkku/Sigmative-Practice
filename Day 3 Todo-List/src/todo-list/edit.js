/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";
import { Button, TextControl } from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { TiPlus } from "react-icons/ti";
import { AiFillDelete } from "react-icons/ai";
import { toast, ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 500);
			// console.log("Current width:", window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if(attributes.tasks.length == 0){
			toast.info("No Task Available");
		}
	}	, [attributes.tasks]);

	const capitalizeFirstWord = (text) => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

	const addTask = () => {
		if (attributes.newTask.trim() !== "") {
			setAttributes({
				tasks: [
					...attributes.tasks,
					{ text: capitalizeFirstWord(attributes.newTask), completed: false },
				],
				newTask: "",
			});
			toast.success("Added a new task");
		} else {
			toast.warn("Please enter a task");
		}
	};

	const toggleTask = (index) => {
		const updatedTasks = attributes.tasks.map((task, i) =>
			i === index ? { ...task, completed: !task.completed } : task,
		);
		setAttributes({ tasks: updatedTasks });
		toast.success("Updated an existing task");
	};

	const removeTask = (index) => {
		const updatedTasks = attributes.tasks.filter((_, i) => i !== index);
		setAttributes({ tasks: updatedTasks });
		toast.info("Removed a task");
	};

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>

			<div {...useBlockProps()}>
				<div style={{ display: "flex", width: "100%" }}>
					<div style={{ width: "80%" }}>
						<TextControl
							isPressed
							style={{
								width: "100%",
								height: "50px",
								backgroundColor: "white",
								borderRadius: "5px",
								border: "1px solid black",
								outline: "none",
							}}
							placeholder="Add a new task"
							value={attributes.newTask}
							onChange={(newTask) => setAttributes({ newTask })}
						/>
					</div>
					<div style={{ width: "20%" }} onClick={addTask}>
						<Button
							isPressed
							style={{
								width: "100%",
								color: "white",
								height: "50px",
								backgroundColor: "green",
								textAlign: "center",
								borderRadius: "5px",
								border: "1px solid black",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
							}}
						>
							{isMobile ? <TiPlus /> : "Add Task"}
						</Button>
					</div>
				</div>
				<ol>
					{attributes.tasks.length === 0 && (
						<p style={{ textAlign: "center" }}>No Task Available</p>
					)}
					{attributes.tasks.map((task, index) => {
						const taskId = `task-${index}`;
						return (
							<li key={index} style={{ width: "100%", padding: "10px 0" }}>
								<div
									style={{
										display: "flex",
										width: "100%",
										flexDirection: "row",
										alignItems: "center",
										justifyContent: "space-between",
									}}
								>
									<div style={{ display: "flex", alignItems: "flex-start" }}>
										<input
											type="checkbox"
											checked={task.completed}
											onChange={() => toggleTask(index)}
											id={taskId}
										/>
										<label htmlFor={taskId} style={{ padding: "0 20px" }}>
											<span
												style={{
													textDecoration: task.completed
														? "line-through"
														: "none",
													cursor: "pointer",
													wordBreak: "break-word",
												}}
											>
												{task.text}
											</span>
										</label>
									</div>
									<div>
										<Button
											isDestructive
											onClick={() => removeTask(index)}
											isPressed
											style={{
												height: "50px",
												backgroundColor: "red",
												color: "white",
												textAlign: "center",
												borderRadius: "5px",
												border: "1px solid red",
												cursor: "pointer",
												float: "right",
											}}
										>
											{isMobile ? <AiFillDelete /> : "Remove"}
										</Button>
									</div>
								</div>
							</li>
						);
					})}
				</ol>
			</div>
		</>
	);
}
