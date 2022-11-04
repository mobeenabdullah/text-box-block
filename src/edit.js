import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings,
	ContrastChecker,
	withColors,
} from '@wordpress/block-editor';
import './editor.scss';

function Edit(props) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
	} = props;
	const { text, alignment } = attributes;

	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onChangeAlignment = (newAlignment) => {
		setAttributes({ alignment: newAlignment });
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
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background Color', 'text-box'),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text Color', 'text-box'),
						},
					]}
				>
					<ContrastChecker
						textColor={text.color}
						backgroundColor={backgroundColor.color}
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
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					},
				})}
				placeholder={__('Your Text', 'text-block')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}

export default withColors({
	backgroundColor: 'background-color',
	textColor: 'color',
})(Edit);
