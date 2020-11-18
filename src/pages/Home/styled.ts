import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme('colors.background')};
  padding-left: ${theme('spacing.default.px')};
  padding-right: ${theme('spacing.default.px')};
`
