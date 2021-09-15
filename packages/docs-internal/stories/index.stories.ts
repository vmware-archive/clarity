import { html, TemplateResult } from 'lit-html';
import '../src/component-status/register.js';

export default {
  title: 'Clarity Cross Components',
  component: 'doc-component-status',
  argTypes: {},
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({ slot }: ArgTypes) => html`
  <doc-component-status> ${slot} </doc-component-status>
`;

export const Regular = Template.bind({});

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};

SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
