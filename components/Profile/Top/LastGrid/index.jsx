import React from 'react'
import { Wrapper, Tabs } from './style'
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Katas from './Katas';
import Solutions from './Solutions';


const LastGrid = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
         <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tabs label="Katas" value="1" />
            <Tabs label="Solutions" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <Katas/>
        </TabPanel>
        <TabPanel value="2">
            <Solutions/>
        </TabPanel>
      </TabContext>
    </Box>
    </Wrapper>
  )
}

export default LastGrid