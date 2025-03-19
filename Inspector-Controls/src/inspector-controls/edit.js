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
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from "@wordpress/block-editor";
import { useState } from "@wordpress/element";
import {
	Button,
	ColorPicker,
	Flex,
	FlexItem,
	GradientPicker,
	PanelBody,
	PanelRow,
	RangeControl,
	SelectControl,
	TextControl,
} from "@wordpress/components";

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
	const [boxWidthIC, setboxWidthIC] = useState(false);
	const [boxHeightIC, setboxHeightIC] = useState(false);
	const [boxBackgroundColorIC, setboxBackgroundColorIC] = useState(false);
	const [boxMarginIC, setboxMarginIC] = useState(false);
	const [boxPaddingIC, setboxPaddingIC] = useState(false);
	const [boxBorderIC, setboxBorderIC] = useState(false);
	const [boxBorderStyleIC, setboxBorderStyleIC] = useState(false);
	const [boxBorderColorIC, setboxBorderColorIC] = useState(false);
	const [boxBorderRadiusIC, setboxBorderRadiusIC] = useState(false);
	const [textFontSizeIC, settextFontSizeIC] = useState(false);
	const [textFontWeightIC, settextFontWeightIC] = useState(false);
	const [linkFontSizeIC, setlinkFontSizeIC] = useState(false);
	const [linkFontWeightIC, setlinkFontWeightIC] = useState(false);
	const [linkFontDecorationIC, setlinkFontDecorationIC] = useState(false);

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
		linkFontDecoration,
	} = attributes;
	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Box Width Height Bg - Color", "inspector-controls")}
					initialOpen={false}
				>
					<PanelRow>
						<Flex
							style={{
								marginBottom: "10px",
							}}
						>
							<FlexItem>
								<Button
									style={{ backgroundColor: "red" }}
									isPressed
									onClick={() => {
										if (boxWidthIC == false) {
											setboxWidthIC(true);
										} else {
											setboxWidthIC(false);
										}
										setboxHeightIC(false);
										setboxBackgroundColorIC(false);
									}}
								>
									{__("Width", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "red" }}
									isPressed
									onClick={() => {
										if (boxHeightIC == false) {
											setboxHeightIC(true);
										} else {
											setboxHeightIC(false);
										}
										setboxWidthIC(false);
										setboxBackgroundColorIC(false);
									}}
								>
									{__("Height", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "red", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxBackgroundColorIC == false) {
											setboxBackgroundColorIC(true);
										} else {
											setboxBackgroundColorIC(false);
										}
										setboxWidthIC(false);
										setboxHeightIC(false);
									}}
								>
									{__("Bg - Color", "inspector-controls")}
								</Button>
							</FlexItem>
						</Flex>
					</PanelRow>
					{boxWidthIC && (
						<RangeControl
						label="Box Width"
							value={boxWidth}
							onChange={(boxWidth) => setAttributes({ boxWidth })}
							min={10}
							max={100}
						/>
					)}
					{boxHeightIC && (
						<TextControl
						label="Box Height"
							type="number"
							value={boxHeight}
							onChange={(boxHeight) =>
								setAttributes({ boxHeight: Number(boxHeight) || 1 })
							}
						/>
					)}

					{boxBackgroundColorIC && (
						<>
							<SelectControl
								label="Background Type"
								value={boxBackgroundType}
								options={[
									{ label: "Solid Color", value: "color" },
									{ label: "Gradient", value: "gradient" },
								]}
								onChange={(boxBackgroundType) =>
									setAttributes({ boxBackgroundType })
								}
							/>

							{boxBackgroundType === "color" && (
								<ColorPicker
								label="Background Color"
									color={boxBackgroundColor}
									onChange={(boxBackgroundColor) =>
										setAttributes({ boxBackgroundColor })
									}
								/>
							)}

							{boxBackgroundType === "gradient" && (
								<GradientPicker
								label="Background Gradient"
									value={boxBackgroundGradient}
									onChange={(boxBackgroundGradient) =>
										setAttributes({ boxBackgroundGradient })
									}
								/>
							)}
						</>
					)}
				</PanelBody>
				<PanelBody
					title={__("Box Margin Padding", "inspector-controls")}
					initialOpen={true}
				>
					<PanelRow>
						<Flex
							style={{
								marginBottom: "10px",
							}}
						>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxMarginIC == false) {
											setboxMarginIC(true);
										} else {
											setboxMarginIC(false);
										}
										setboxPaddingIC(false);
									}}
								>
									{__("Margin", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxPaddingIC == false) {
											setboxPaddingIC(true);
										} else {
											setboxPaddingIC(false);
										}
										setboxMarginIC(false);
									}}
								>
									{__("Padding", "inspector-controls")}
								</Button>
							</FlexItem>
						</Flex>
					</PanelRow>
					{boxMarginIC && (
						<RangeControl
						label="Box Margin"
							value={boxMargin}
							onChange={(boxMargin) => setAttributes({ boxMargin })}
							min={10}
							max={100}
						/>
					)}

					{boxPaddingIC && (
						<RangeControl
						label="Box Padding"
							value={boxPadding}
							onChange={(boxPadding) => setAttributes({ boxPadding })}
							min={10}
							max={100}
						/>
					)}
				</PanelBody>

				<PanelBody
					title={__("Box Border", "inspector-controls")}
					initialOpen={false}
				>
					<PanelRow>
						<Flex
							style={{
								marginBottom: "10px",
							}}
						>
							<FlexItem>
								<Button
									style={{ backgroundColor: "Green", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxBorderIC == false) {
											setboxBorderIC(true);
										} else {
											setboxBorderIC(false);
										}
										setboxBorderColorIC(false);
										setboxBorderRadiusIC(false);
										setboxBorderStyleIC(false);
									}}
								>
									{__("Width", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "green", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxBorderStyleIC == false) {
											setboxBorderStyleIC(true);
										} else {
											setboxBorderStyleIC(false);
										}
										setboxBorderIC(false);
										setboxBorderColorIC(false);
										setboxBorderRadiusIC(false);
									}}
								>
									{__("Style", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "green", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxBorderColorIC == false) {
											setboxBorderColorIC(true);
										} else {
											setboxBorderColorIC(false);
										}
										setboxBorderIC(false);
										setboxBorderStyleIC(false);
										setboxBorderRadiusIC(false);
									}}
								>
									{__("Color", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "green", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (boxBorderRadiusIC == false) {
											setboxBorderRadiusIC(true);
										} else {
											setboxBorderRadiusIC(false);
										}
										setboxBorderIC(false);
										setboxBorderStyleIC(false);
										setboxBorderColorIC(false);
									}}
								>
									{__("Radius", "inspector-controls")}
								</Button>
							</FlexItem>
						</Flex>
					</PanelRow>

					{boxBorderIC && (
						<RangeControl
						label="Border Width"
							value={boxBorder}
							onChange={(boxBorder) =>
								setAttributes({ boxBorder: Number(boxBorder) })
							}
							min={0}
							max={100}
						/>
					)}

					{boxBorderStyleIC && (
						<SelectControl
							label="Border Style"
							value={boxBorderStyle}
							options={[
								{ label: "None", value: "none" },
								{ label: "Hidden", value: "hidden" },
								{ label: "Dotted", value: "dotted" },
								{ label: "Dashed", value: "dashed" },
								{ label: "Solid", value: "solid" },
							]}
							onChange={(boxBorderStyle) => setAttributes({ boxBorderStyle })}
						/>
					)}

					{boxBorderColorIC && (
						<ColorPicker
						label="Border Color"
							color={boxBorderColor}
							onChange={(boxBorderColor) => setAttributes({ boxBorderColor })}
						/>
					)}

					{boxBorderRadiusIC && (
						<RangeControl
						label="Border Radius"
							value={boxBorderRadius}
							onChange={(boxBorderRadius) => setAttributes({ boxBorderRadius })}
							min={0}
							max={200}
						/>
					)}
				</PanelBody>

				<PanelBody
					title={__("Box Text Link", "inspector-controls")}
					initialOpen={false}
				>
					<PanelRow>
						<Flex
							style={{
								marginBottom: "10px",
							}}
						>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (textFontSizeIC == false) {
											settextFontSizeIC(true);
										} else {
											settextFontSizeIC(false);
										}
										settextFontWeightIC(false);
										setlinkFontSizeIC(false);
										setlinkFontWeightIC(false);
										setlinkFontDecorationIC(false);
									}}
								>
									{__("TF", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (textFontWeightIC == false) {
											settextFontWeightIC(true);
										} else {
											settextFontWeightIC(false);
										}
										settextFontSizeIC(false);
										setlinkFontSizeIC(false);
										setlinkFontWeightIC(false);
										setlinkFontDecorationIC(false);
									}}
								>
									{__("TW", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (linkFontSizeIC == false) {
											setlinkFontSizeIC(true);
										} else {
											setlinkFontSizeIC(false);
										}
										settextFontWeightIC(false);
										settextFontSizeIC(false);
										setlinkFontWeightIC(false);
										setlinkFontDecorationIC(false);
									}}
								>
									{__("LF", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (linkFontWeightIC == false) {
											setlinkFontWeightIC(true);
										} else {
											setlinkFontWeightIC(false);
										}
										settextFontWeightIC(false);
										settextFontSizeIC(false);
										setlinkFontSizeIC(false);
										setlinkFontDecorationIC(false);
									}}
								>
									{__("LW", "inspector-controls")}
								</Button>
							</FlexItem>
							<FlexItem>
								<Button
									style={{ backgroundColor: "blue", textWrap: "nowrap" }}
									isPressed
									onClick={() => {
										if (linkFontDecorationIC == false) {
											setlinkFontDecorationIC(true);
										} else {
											setlinkFontDecorationIC(false);
										}
										settextFontWeightIC(false);
										settextFontSizeIC(false);
										setlinkFontSizeIC(false);
										setlinkFontWeightIC(false);
									}}
								>
									{__("LD", "inspector-controls")}
								</Button>
							</FlexItem>
						</Flex>
					</PanelRow>

					{textFontSizeIC && (
						<RangeControl
						label="Text Font Size"
							value={textFontSize}
							onChange={(textFontSize) =>
								setAttributes({ textFontSize: Number(textFontSize) })
							}
							min={1}
							max={100}
						/>
					)}

					{textFontWeightIC && (
						<SelectControl
							label="Text Font Weight"
							value={textFontWeight}
							options={[
								{ label: "Normal", value: "normal" },
								{ label: "Bold", value: "bold" },
								{ label: "Bolder", value: "bolder" },
								{ label: "Lighter", value: "lighter" },
								{ label: "100", value: "100" },
								{ label: "200", value: "200" },
								{ label: "300", value: "300" },
								{ label: "400", value: "400" },
								{ label: "500", value: "500" },
							]}
							onChange={(textFontWeight) => setAttributes({ textFontWeight })}
						/>
					)}

					{linkFontSizeIC && (
						<RangeControl
						label="Link Font Size"
							value={linkFontSize}
							onChange={(linkFontSize) =>
								setAttributes({ linkFontSize: Number(linkFontSize) })
							}
							min={1}
							max={100}
						/>
					)}

					{linkFontWeightIC && (
						<SelectControl
							label="Link Font Weight"
							value={linkFontWeight}
							options={[
								{ label: "Normal", value: "normal" },
								{ label: "Bold", value: "bold" },
								{ label: "Bolder", value: "bolder" },
								{ label: "Lighter", value: "lighter" },
								{ label: "100", value: "100" },
								{ label: "200", value: "200" },
								{ label: "300", value: "300" },
								{ label: "400", value: "400" },
								{ label: "500", value: "500" },
							]}
							onChange={(linkFontWeight) => setAttributes({ linkFontWeight })}
						/>
					)}

					{linkFontDecorationIC && (
						<SelectControl
							label="Link Decoration"
							value={linkFontDecoration}
							options={[
								{ label: "None", value: "none" },
								{ label: "Underline", value: "underline" },
								{ label: "Overline", value: "overline" },
								{ label: "Line-Through", value: "line-through" },
							]}
							onChange={(linkFontDecoration) =>
								setAttributes({ linkFontDecoration })
							}
						/>
					)}
				</PanelBody>
			</InspectorControls>
			<section {...useBlockProps()}>
				{/* { __(
				'Inspector Controls – hello from the editor!',
				'inspector-controls'
			) } */}
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
						<RichText
							tagName="p"
							value={text}
							onChange={(text) => setAttributes({ text })}
							style={{
								fontSize: textFontSize + "px",
								fontWeight: textFontWeight,
							}}
						/>
						<br />
						<RichText
							tagName="a"
							value={link}
							onChange={(link) => setAttributes({ link })}
							style={{
								fontSize: linkFontSize + "px",
								fontWeight: linkFontWeight,
								textDecoration: linkFontDecoration,
							}}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
