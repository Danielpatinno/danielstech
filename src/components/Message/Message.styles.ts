import { css, styled } from 'styled-components'
import { AlertType } from './Message'

interface ContainerProps {
  type: AlertType
}

const alertMessageType = {
  success: () => css`
    background-color: green;
    color: white;
  `,
  error: () => css`
    background-color: red;
    color: white;
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ type }) => css`
    gap: 1;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    margin-top: 10px;
    font-weight: bold;
    text-align: center;

    ${alertMessageType[type]}
  `}
`
