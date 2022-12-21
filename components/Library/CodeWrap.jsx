import React from 'react'
import styled from 'styled-components'

function CodeWrap({children, headerTitle}) {
  return (
    <Wrapper>
        <Header>
            <HeaderTitle>
                {headerTitle}
            </HeaderTitle>
        </Header>
        {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    height: 100%;

    .cm-theme{
        height: 100%;
    }

    .cm-editor{
        height: 40%;
    }

    .ͼ1 .cm-scroller{
        background: #25294a;
       border: 2px solid #245ab646;
       border-top: none;
       min-height: 500px;
    }

    .ͼ15 .cm-activeLine{
        background: #202443a3;
    }

    .ͼ15 .cm-gutters{
        background-color:#202443 ;
    }
`

const Header = styled.div`
    padding: 8px;
    background: #202443;
    border-top-left-radius: 8px;
	border-top-right-radius: 8px;
`

const HeaderTitle = styled.p`
    font-size: .875rem!important;
	line-height: 1.25rem!important;
    color: #fff
`

export default CodeWrap