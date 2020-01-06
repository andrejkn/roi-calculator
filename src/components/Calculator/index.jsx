import React, { useState } from 'react';
import styled from 'styled-components';

import Slider from '../Slider';

const CalculatorContainer = styled.div`
  margin: 0 30%;
  width: 40%;
  border-radius: 10px;
  border-color: #888;
  border-style: solid;
  border-width: 1px;
  font-family: Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif
`;

const DetailsContainer = styled.div`
  margin: 10px;
`;

const MonthlyPaymentContainer = styled.div`
  font-weight: 600;
  font-size: 1.25rem;
`;

const SectionLabelContainer = styled.div`
  margin-top: 20px;
  font-weight: 500;
  font-size: 0.85rem;
  color: #AAA;
`;

export default function Calculator() {
  const [state, setState] = useState({
    monthlyPayment: 1500,
    initialInvestment: 2100,
    monthlyInvestment: 0,
    monthsRenting: 60,
  });

  const handleSetInitialInvestment = (evt) => setState({
    ...state,
    initialInvestment: Number(evt.target.value),
  });

  const handleSetMonthlyInvestment = (evt) => setState({
    ...state,
    monthlyInvestment: Number(evt.target.value),
  });

  const handleSetMonthsRenting = (evt) => setState({
    ...state,
    monthsRenting: Number(evt.target.value) * 12,
  });

  const ownershipValue = state.initialInvestment
    + (state.monthlyInvestment * state.monthsRenting);

  return (
    <CalculatorContainer>
      <DetailsContainer>
        MONTHLY PAYMENT
        <MonthlyPaymentContainer>
          {`$${state.monthlyPayment.toLocaleString('en')} rent + $ ${state.monthlyInvestment} investment`}
        </MonthlyPaymentContainer>
        <SectionLabelContainer>
          INITIAL INVESTMENT
        </SectionLabelContainer>
        <Slider
          minValue={2100}
          maxValue={12600}
          step={25}
          value={state.initialInvestment}
          label={`$${state.initialInvestment.toLocaleString('en')}`}
          onChange={handleSetInitialInvestment}
        />
        <SectionLabelContainer>
          MONTHLY INVESTMENT
        </SectionLabelContainer>
        <Slider
          minValue={0}
          maxValue={500}
          step={5}
          value={state.monthlyInvestment}
          label={`$${state.monthlyInvestment.toLocaleString('en')}`}
          onChange={handleSetMonthlyInvestment}
        />
        <SectionLabelContainer>
          YEARS WITH UP&UP
        </SectionLabelContainer>
        <Slider
          minValue={1}
          maxValue={10}
          step={1}
          value={state.monthsRenting / 12}
          label={`${(state.monthsRenting / 12)} years`}
          onChange={handleSetMonthsRenting}
        />
        <SectionLabelContainer>
          OWNERSHIP VALUE
        </SectionLabelContainer>
        <div>
          {`$${ownershipValue.toLocaleString('en')}`}
        </div>
      </DetailsContainer>
    </CalculatorContainer>
  );
}
