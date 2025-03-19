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

import { useState } from "@wordpress/element";
import { Button, PanelBody, RangeControl } from "@wordpress/components";
import {
	useBlockProps,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from "@wordpress/block-editor";

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

const Edit = ({ attributes, setAttributes }) => {
	const [photos, setPhotos] = useState(attributes.photos || []);
	const [imageCount, setImageCount] = useState(attributes.imageCount || 3);

	// Handle adding a new image to the gallery
	const handleImageSelect = (newImage) => {
		const newPhotos = [
			...photos,
			{ id: Date.now(), src: newImage.url, alt: newImage.alt },
		];
		setPhotos(newPhotos);
		setAttributes({ photos: newPhotos });
	};

	// Handle removing an image from the gallery
	const handleImageRemove = (id) => {
		const updatedPhotos = photos.filter((photo) => photo.id !== id);
		setPhotos(updatedPhotos);
		setAttributes({ photos: updatedPhotos });
	};

	// Handle changing the number of images to display
	const handleRangeChange = (value) => {
		setImageCount(value);
		setAttributes({ imageCount: value });
	};

	// Render images (either uploaded or default)
	const renderImages = () => {
		const displayedPhotos = [...photos];

		// Fill the gallery with default images if the count doesn't match
		while (displayedPhotos.length < imageCount) {
			displayedPhotos.push(
				defaultPhotos[displayedPhotos.length % defaultPhotos.length],
			);
		}

		return (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexWrap: "wrap",
					gap: "20px",
					padding: "20px",
				}}
			>
				{displayedPhotos.map((photo, index) => (
					<div
						key={index}
						style={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
							justifyContent: "center",
							flexDirection: "column",
						}}
					>
						<img src={photo.src} alt={photo.alt} width="200" height="200" />
						<Button style={{backgroundColor: 'red', color: 'white'}} isPressed onClick={() => handleImageRemove(photo.id)}>
							Remove
						</Button>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Gallery Settings" initialOpen={true}>
					<RangeControl
						label={__("Select Count of Images")}
						value={imageCount}
						onChange={handleRangeChange}
						min={1}
						max={10}
					/>
				</PanelBody>
				{/* MediaUpload to select images */}
				<PanelBody title="Upload Images" initialOpen={false}>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={handleImageSelect}
							allowedTypes={["image"]}
							render={({ open }) => (
								<Button onClick={open} isPressed style={{backgroundColor: 'green', color: 'white'}}>
									Upload Image
								</Button>
							)}
						/>
					</MediaUploadCheck>
				</PanelBody>
			</InspectorControls>
			{/* Render the images in a gallery */}
			<section {...useBlockProps()}>{renderImages()}</section>
		</>
	);
};

export default Edit;
