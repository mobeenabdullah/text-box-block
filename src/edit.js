import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
	};
	const onChangeBackgroundColor = (newBackgroundColor) => {
		setAttributes({ backgroundColor: newBackgroundColor });
	};
	const onChangeTextColor = (newTextColor) => {
		setAttributes({ textColor: newTextColor });
	};

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					disableCustomColors={false}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={text}
						backgroundColor={backgroundColor}
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls group="inline">
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>
			<RichText
				onChange={onChangeText}
				value={text}
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						backgroundColor,
						color: textColor,
					},
				})}
				placeholder={__('Your Text', 'text-block')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
