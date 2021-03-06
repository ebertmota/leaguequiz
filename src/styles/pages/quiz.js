import styled, { css } from 'styled-components';

export const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const QuestionContainer = styled.ul`
  min-width: 560px;
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    min-height: 0;
    min-width: 0;
  }
`;

export const QuestionItem = styled.li`
  ${props =>
    props.IsCorrect && props.selected
      ? css`
          background: ${props.theme.colors.success};
        `
      : css`
          background: ${props.selected
            ? 'RGBA(27, 106, 168, 0.9)'
            : 'RGBA(27, 106, 168, 0.3)'};
        `}

  ${props =>
    props.IsWrong &&
    props.selected &&
    css`
      background: ${props.theme.colors.wrong};
    `}



  ${props =>
    props.disabled &&
    css`
      pointer-events: none;
    `}

  color: ${props => (props.selected ? '#FFF' : '#222')};

  border-radius: 8px;

  label {
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    padding: 15px;
    transition: background 0.2s;
  }
  input {
    display: none;
  }
  margin: 10px 0;
  width: 100%;
`;
