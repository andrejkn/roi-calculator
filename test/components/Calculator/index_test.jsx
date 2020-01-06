import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../../../src/components/Calculator';
import Slider from '../../../src/components/Slider';

let component = null;

describe('Calculator component test', () => {
  beforeEach(() => {
    component = renderer.create(
      <Calculator />,
    );
  });

  it('should match snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should trigger onChange on sliders', () => {
    const sliders = component.root.findAllByType(Slider);
    const event = {
      preventDefault() {},
      target: { value: 1000 }
    };
    renderer.act(() => sliders[0].props.onChange(event));
    expect(sliders[0].props.value).toBe(event.target.value);
    expect(sliders[0].props.label).toBe(`$${event.target.value.toLocaleString()}`);

    renderer.act(() => sliders[1].props.onChange(event));
    expect(sliders[1].props.value).toBe(event.target.value);
    expect(sliders[1].props.label).toBe(`$${event.target.value.toLocaleString()}`);

    renderer.act(() => sliders[2].props.onChange(event));
    expect(sliders[2].props.value).toBe(event.target.value);
    expect(sliders[2].props.label).toBe(`${event.target.value} years`);
  });

  it('should have a correct calculation of ownership value', () => {
    const sliders = component.root.findAllByType(Slider);
    const divs = component.root.findAllByType('div');
  
    const ownershipValue = sliders[0].props.value + (sliders[1].props.value * sliders[2].props.value);
    expect(`$${ownershipValue.toLocaleString()}`)
      .toBe(divs[divs.length - 1].children[0]);
  });
});
