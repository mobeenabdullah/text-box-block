import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
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
