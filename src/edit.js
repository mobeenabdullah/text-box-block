import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text } = attributes;

	return (
		<>
			<BlockControls group="inline">
				<p>Inline Controls</p>
			</BlockControls>
			<BlockControls group="block">
				<p>Block Controls</p>
			</BlockControls>
			<BlockControls
				group="other"
				controls={[
					{
						title: 'Button 1',
						icon: 'button',
						isActive: true,
						onClick: () => {
							console.log('Button 1 clicked'); // eslint-disable-line no-console
						},
					},
				]}
			>
				<ToolbarGroup>
					<ToolbarButton
						icon="button"
						title="Button 2"
						onClick={() => {
							console.log('Button 2 clicked'); // eslint-disable-line no-console
						}}
					/>
				</ToolbarGroup>
				<ToolbarDropdownMenu
					icon="arrow-down-alt2"
					label={__('More Options', 'text-domain')}
					controls={[
						{
							title: 'Button 3',
							icon: 'button',
							onClick: () => {
								console.log('Button 3 clicked'); // eslint-disable-line no-console
							},
						},
					]}
				/>
			</BlockControls>
			<RichText
				onChange={(value) => setAttributes({ text: value })}
				value={text}
				{...useBlockProps()}
				placeholder={__('Your Text', 'text-block')}
				tagName="h4"
				allowedFormats={[]}
			/>
		</>
	);
}
