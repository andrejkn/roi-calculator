import React from 'react';
import renderer from 'react-test-renderer';

import Slider from '../../../src/components/Slider';

let component = null;
let testProps = null;

describe('Slider component test', () => {
  beforeEach(() => {
    testProps = {
      onChange: jest.fn(),
      value: 1000,
      minValue: 10,
      maxValue: 500,
    };

    component = renderer.create(
      <Slider
        {...testProps}
      />,
    );
  });

  it('should match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should trigger onChange', () => {
    expect(testProps.onChange).toHaveBeenCalledTimes(0);
    renderer.act(component.root.props.onChange);
    expect(testProps.onChange).toHaveBeenCalledTimes(1);
  });
});
