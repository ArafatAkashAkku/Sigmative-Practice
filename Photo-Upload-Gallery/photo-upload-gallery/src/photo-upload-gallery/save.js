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
const defaultPhotos = [
	{
		id: 1,
		src: "https://placehold.co/200x200??text=Default1",
		alt: "Default Image 1",
	},
	{
		id: 2,
		src: "https://placehold.co/200x200??text=Default2",
		alt: "Default Image 2",
	},
	{
		id: 3,
		src: "https://placehold.co/200x200??text=Default3",
		alt: "Default Image 3",
	},
];

const save = ({ attributes }) => {
	const { photos, imageCount } = attributes;
	const displayedPhotos = [...photos];

	// Fill the gallery with default images if the count doesn't match
	while (displayedPhotos.length < imageCount) {
		displayedPhotos.push(
			defaultPhotos[displayedPhotos.length % defaultPhotos.length],
		);
	}
	// { 'Photo Upload Gallery – hello from the saved content!' }
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexWrap: "wrap",
				gap: "20px",
				padding: "20px",
			}}
			{...useBlockProps.save()}
		>
			{displayedPhotos.map((photo) => (
				<div key={photo.id}>
					<img
						src={photo.src}
						alt={photo.alt}
						width="200"
						height="200"
						loading="lazy"
					/>
				</div>
			))}
		</section>
	);
};

export default save;
