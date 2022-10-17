import React from 'react';
import styled from 'styled-components';

const ChoicesWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;
const ChoicesRadio = styled.input`
  // display: block;
  cursor: pointer;
`;
const ChoicesLabel = styled.label`
  margin-right: 5px;
  cursor: pointer;
`;

export function Choices({openItem, choice, changeChoices}) {
  return (
    <>
      <h3>Выбирайте</h3>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio
              onChange={ changeChoices}
              type="radio"
              value={item}
              checked={choice === item}
            />
            {item}
          </ChoicesLabel>
        ))}
      </ChoicesWrap>
    </>
  );
}
