/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

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
	const {
		boxBackgroundColor,
		boxBackgroundType,
		boxBackgroundGradient,
		boxWidth,
		boxHeight,
		boxMargin,
		boxPadding,
		boxBorder,
		boxBorderStyle,
		boxBorderColor,
		boxBorderRadius,
		text,
		textFontSize,
		textFontWeight,
		link,
		linkFontSize,
		linkFontWeight,
		linkFontDecoration
	} = attributes;
	return (
		<section {...useBlockProps.save()}>
			<div>
				<div
					style={{
						background:
							boxBackgroundType === "gradient"
								? boxBackgroundGradient
								: boxBackgroundColor,
						width: boxWidth + "%",
						height: boxHeight + "px",
						margin: boxMargin + "px",
						padding: boxPadding + "px",
						borderWidth: boxBorder + "px",
						borderStyle: boxBorderStyle,
						borderColor: boxBorderColor,
						borderRadius: boxBorderRadius + "px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						boxSizing: "border-box",
					}}
				>
					<RichText.Content
						tagName="p"
						value={text}
						style={{
							fontSize: textFontSize + "px",
							fontWeight: textFontWeight,
							textDecoration: linkFontDecoration,
						}}
					/>
					<br />
					<RichText.Content
						tagName="a"
						value={link}
						style={{
							fontSize: linkFontSize + "px",
							fontWeight: linkFontWeight,
						}}
					/>
				</div>
			</div>
		</section>
	);
}
