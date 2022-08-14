import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray_30};
  z-index: 9998;
  position: absolute;
  top: 0;
  left: 0;
`

export const TitleContainer = styled(motion.div)`
  position: absolute;
`

export const MainTitle = styled.h2`
  font-size: 5rem;
  line-height: 6rem;
  color: ${({ theme }) => theme.colors.white};
  filter: drop-shadow(3px 3px 2px ${({ theme }) => theme.colors.gray100});
  z-index: 9999;
`

export const Button = styled.button`
  cursor: pointer;
  &:hover {
    background: #3333335d;
  }
`
