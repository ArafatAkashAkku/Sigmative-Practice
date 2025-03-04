/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	return (
		<ol {...useBlockProps.save()}>
			{attributes.tasks.length === 0 && (
				<p style={{ textAlign: "center" }}>No Task Available</p>
			)}
			{attributes.tasks.map((task, index) => (
				<li key={index} style={{ width: "100%" }}>
					<div
						style={{
							display: "flex",
							width: "100%",
							flexDirection: "row",
							alignItems: "center",
						}}
					>
						<input type="checkbox" checked={task.completed} readOnly disabled />
						<span
							style={{
								textDecoration: task.completed ? "line-through" : "none",
								wordBreak: "break-word",
								padding: "20px",
							}}
						>
							{task.text}
						</span>
					</div>
				</li>
			))}
		</ol>
	);
}
