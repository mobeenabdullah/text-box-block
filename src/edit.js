import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;

	return (
		<RichText
			onChange={(value) => setAttributes({ text: value })}
			value={text}
			{...useBlockProps()}
			placeholder={__('Your Text', 'text-block')}
			tagName="h4"
			allowedFormats={['core/bold']}
		/>
	);
}
