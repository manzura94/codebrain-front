import styled from "styled-components";
import FormControl from "@mui/material/FormControl";
import Box from '@mui/material/Box';


const Form = styled(FormControl)`
margin-bottom: 25px !important;

.MuiOutlinedInput-notchedOutline{
  border:  2px solid #7F7F7F !important;
}

.MuiSelect-iconOutlined {
  color: #fff !important;
  font-size: 30px !important;
}

 .MuiOutlinedInput-input{
color: #fff !important;
}


.MuiInputLabel-root{
  color: #6FACFF !important;
}

`

const Search = styled(Box)`
margin-bottom: 25px !important;
width: 100% !important; 


.MuiOutlinedInput-notchedOutline{
  border:  2px solid #7F7F7F !important;
}

.MuiSelect-iconOutlined {
  color: #fff !important;
  font-size: 30px !important;
}

.MuiOutlinedInput-input{
color: #fff !important;
}

.MuiInputLabel-root{
  color: #6FACFF !important;
}

`

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  margin-right: 28px;
  width: 27%;
  height: 100%;
  background: #202442 !important;
  border-radius: 0px 0px 7px 7px;
  padding: 28px 14px;
`;

Wrapper.Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff !important;
  margin-bottom: 10px;
`;

const Container = styled.div`
  background: #25294a !important;
  border-radius: 14px;
  padding: 28px 14px;
`;

export { Wrapper, Container ,Form, Search};
