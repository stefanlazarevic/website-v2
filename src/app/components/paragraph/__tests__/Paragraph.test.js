import React from 'react';
import Paragraph from '../Paragraph';
import { shallow, mount } from 'enzyme';
import { light } from '../../../Theme';

describe('Paragraph component', () => {
  it('Render paragraph element.', () => {
    const paragraph = shallow(<Paragraph />);
    expect(paragraph).toMatchSnapshot();
  });

  it('Render text inside paragraph,', () => {
    const paragraph = mount(<Paragraph theme={light}>Hello World</Paragraph>);
    expect(paragraph.text()).toEqual('Hello World');
  });

  it('Render child components inside paragraph.', () => {
    const paragraph = mount(
      <Paragraph theme={light}>
        This text is <strong>bold.</strong>
      </Paragraph>
    );

    expect(paragraph.text()).toEqual('This text is bold.');
  });
});
