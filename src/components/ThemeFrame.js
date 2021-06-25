import React from 'react'
import styled from 'styled-components'

const Styled = {
  ThemeFrame: styled.div`
    background-image: linear-gradient(
      135deg,
      #55fbfb 0%,
      #3c58e0 25%,
      #55fbfb 50%,
      #3c58e0 75%,
      #55fbfb 100%
    );
    clip-path: polygon(0 50%, 20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%);
    height: 60px;
    min-width: 8rem;
    padding: 4px;
  `,
  ThemeFrameInner: styled.div`
    background-color: black;
    clip-path: polygon(0 50%, 18px 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 18px 100%);
    height: 100%;
  `
}

const ThemeFrame = props => {
  return (
    <Styled.ThemeFrame>
      <Styled.ThemeFrameInner>
        { props.children }
      </Styled.ThemeFrameInner>
    </Styled.ThemeFrame>
  )
}

export default ThemeFrame
