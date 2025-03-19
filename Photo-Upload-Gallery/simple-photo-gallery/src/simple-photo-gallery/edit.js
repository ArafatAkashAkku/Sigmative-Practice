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
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, PanelRow, RangeControl } from "@wordpress/components";

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
		<>
			<InspectorControls>
				<PanelBody title={__("Media Upload Settings", "media-upload")}>
					<RangeControl
						label={__("Number of Images", "media-upload")}
						value={photoCount}
						onChange={(photoCount) =>
							setAttributes({ photoCount: Number(photoCount) })
						}
						min={1}
						max={5}
					/>
				</PanelBody>
			</InspectorControls>
			<section
				{...useBlockProps()}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
				}}
			>
				{/* {__(
					"Simple Photo Gallery – hello from the editor!",
					"simple-photo-gallery",
				)} */}
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
		</>
	);
}
