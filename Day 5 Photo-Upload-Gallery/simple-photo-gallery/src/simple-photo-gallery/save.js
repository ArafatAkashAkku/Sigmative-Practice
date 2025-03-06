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
	const { photos, photoCount } = attributes;

	const renderImages = (count) => {
		const images = [];
		for (let i = 0; i < count; i++) {
			images.push(
				<img
					key={i}
					src={photos[i].src}
					alt={photos[i].alt - `${i + 1}`}
					loading="lazy"
					width={200}
					height={200}
				/>,
			);
		}
		return images;
	};

	return (
		<section
			{...useBlockProps.save()}
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			{/* {"Simple Photo Gallery – hello from the saved content!"} */}
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "20px",
					justifyContent: "center",
				}}
			>
				{renderImages(photoCount)}
			</div>
		</section>
	);
}
