import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SliderContainer = styled.div`
  border-radius: 0px;
  border-color: #888;
  margin: 10px 0px;
`;

const LabelContainer = styled.div`
  text-align: center;
`;

const SliderElement = styled.input`
  width: 100%;
`;

export default function Slider({
  value,
  label,
  minValue,
  maxValue,
  step,
  onChange,
}) {
  return (
    <SliderContainer>
      <LabelContainer>
        {label}
      </LabelContainer>
      <SliderElement
        type="range"
        min={minValue}
        max={maxValue}
        step={step}
        value={value}
        onChange={onChange}
      />
    </SliderContainer>
  );
}

Slider.defaultProps = {
  step: 1,
  label: '',
};

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  step: PropTypes.number,
  label: PropTypes.string,
};
