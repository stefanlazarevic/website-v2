import React from 'react';
import Paragraph from '../Paragraph';
import { shallowWithLightTheme } from '../../../tests/shallow';
import { mountWithLightTheme } from '../../../tests/mount';

describe('Paragraph component', () => {
  it('Render paragraph element.', () => {
    const paragraph = shallowWithLightTheme(<Paragraph />);
    expect(paragraph).toMatchSnapshot();
  });

  it('Render text inside paragraph,', () => {
    const paragraph = mountWithLightTheme(<Paragraph>Hello World</Paragraph>);
    expect(paragraph.text()).toEqual('Hello World');
  });

  it('Render text inside paragraph with child components.', () => {
    const paragraph = mountWithLightTheme(
      <Paragraph>
        This text is <strong>bold.</strong>
      </Paragraph>
    );

    expect(paragraph.text()).toEqual('This text is bold.');
  });
});
