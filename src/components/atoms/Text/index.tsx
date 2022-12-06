import React from 'react'
import StyledText from './styles'

interface IText {
  children: JSX.Element | string
  size?: string
  weight?: string
  color?: string
  padding?: string
}

const defaultProps: IText = {
  size: 'sm',
  weight: 'normal',
  color: 'black',
  children: '',
  padding: '0',
}

const Text: React.FC<IText> = ({ children, size, weight, color, padding }) => {
  return (
    <StyledText size={size} weight={weight} color={color} padding={padding}>
      {children}
    </StyledText>
  )
}

Text.defaultProps = defaultProps

export default Text