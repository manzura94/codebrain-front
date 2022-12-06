import styled from "styled-components";
import FormControl from "@mui/material/FormControl";


const Form = styled(FormControl)`
margin-bottom: 25px !important;

.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
  border:  2px solid #7F7F7F !important;
}

.css-hfutr2-MuiSvgIcon-root-MuiSelect-icon{
  font-size: 30px !important;
  color: #fff !important;
}

.css-bpeome-MuiSvgIcon-root-MuiSelect-icon{
  color: #fff !important;
  font-size: 30px !important;
}

.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input{
  color: #fff !important;
}

.css-1sumxir-MuiFormLabel-root-MuiInputLabel-root, .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
  color: #6FACFF !important;
}

`

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  margin-right: 28px;
  width: 27%;
  height: 100%;
  background: #202442;
  border-radius: 0px 0px 7px 7px;
  padding: 28px 14px;
`;

Wrapper.Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const Container = styled.div`
  background: #25294a;
  border-radius: 14px;
  padding: 28px 14px;
`;

export { Wrapper, Container ,Form};
