import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Wrapper, Container, Form } from "./style";

const arr = ["very-easy", "easy", "medium", "hard", "very-hard", "expert"];
const tagArr = [
  "arrays",
  "objects",
  "recursion",
  "cryptography",
  "language_fundamentals",
  "control_flow",
  "bit_operations",
  "scope",
  "closures",
  "conditions",
  "dates",
  "formatting",
  "algebra",
  "strings",
  "bugs",
  "validation",
  "higher_order_functions",
  "math",
  "numbers",
  "functional_programming",
  "games",
  "algorithms",
  "logic",
  "loops",
  "regex",
  "sorting",
  "data_structures",
];

const Filter = ({ data, setData }) => {

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setData({ ...data, [name]: value });

  };

  return (
    <Wrapper>
      <Wrapper.Title>Filter</Wrapper.Title>
      <Container>
        {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-standard-label">Saralash</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={arr}
          // onChange={handleChange}
          label="Saralash"
        >
          {arr.map(item=>{
      return <MenuItem value={item}>{item}</MenuItem>
          })}
        </Select>
      </FormControl> */}
        <Form fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Qiyinlik daraja
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={data.difficulty}
            name={"difficulty"}
            onChange={(e) => handleChange(e)}
            label="Qiyinlik daraja"
          >
            {arr.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Form>
        <Form fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Teglarni tanlang
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={data.tags}
            name="tags"
            onChange={(e) => handleChange(e)}
            label="Teglarni tanlang"
          >
            {tagArr.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Form>
      </Container>
    </Wrapper>
  );
};

export default Filter;
