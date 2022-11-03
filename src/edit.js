import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
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
				<PanelBody
					title={__('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<TextareaControl
						label="Input Label"
						value={text}
						onChange={onChangeText}
						help="help text"
					/>
					<ToggleControl
						label="Toggle Label"
						checked={true}
						onChange={(v) => console.log(v)} // eslint-disable-line no-console
					/>
					<AnglePickerControl
						label="Angle Picker Label"
						value={0}
						onChange={(v) => console.log(v)} // eslint-disable-line no-console
					/>
					<ColorPicker
						color="#f00"
						onChangeComplete={(c) => console.log(c)} // eslint-disable-line no-console
					/>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#f00' },
							{ name: 'white', color: '#fff' },
							{ name: 'blue', color: '#00f' },
						]}
						onChange={(c) => console.log(c)} // eslint-disable-line no-console
					/>
				</PanelBody>
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
				})}
				placeholder={__('Your Text', 'text-block')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
