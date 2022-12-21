import styled from "styled-components";
import Tab from '@mui/material/Tab';


const Wrapper = styled.div`
  grid-row: span 4;

  .css-13xfq8m-MuiTabPanel-root{
    padding: 24px 0 !important;
  }

`

const Tabs = styled(Tab)`
color: #fff !important;
padding: 0px !important;
`

export {Wrapper, Tabs}