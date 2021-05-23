import {
  Tooltip,
  Checkbox,
  Tabs,
  Button,
  Radio,
  Input,
  Space,
  Card,
} from "antd";

import TabTable from "./TabTable";
import React, { useState } from "react";
import { major, refinement, common } from "./data";
import { Select } from "antd";
import Track from "./track";
import Common from "./common";

const { Option } = Select;

const { TabPane } = Tabs;

const Department = ({ b, c, setC, setD, department, setDepartment }) => {
  const callback = (key) => {
    console.log(key);
  };

  const onChange1 = (e) => {
    setDepartment({ ...department, a: e.target.checked });
  };
  const onChange2 = (e) => {
    setDepartment({ ...department, b: e.target.checked });
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        학과 졸업요건 진단
      </span>
      <br />
      <Card
        style={{
          width: "1250px",
          border: "1px solid gray",
          marginTop: "10px",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        <Checkbox
          id={1}
          onChange={(e) => onChange1(e)}
          style={{ fontWeight: "bold" }}
        >
          졸업시험 통과
        </Checkbox>
        <br />
        <Checkbox
          id={2}
          onChange={(e) => onChange2(e)}
          style={{ fontWeight: "bold" }}
        >
          보유 자격증
        </Checkbox>
        <Select
          defaultValue="lucy"
          style={{ width: 220, marginLeft: "20px" }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
        </Select>
      </Card>
      <Button
        style={{
          float: "right",
          marginTop: "20px",
          marginLeft: "10px",
          background: "#FFDC37",
          borderRadius: "10px 10px 10px 10px",
          boxShadow: "3px 3px 3px #FFDC37",
          //border: "1px solid gray",
        }}
        onClick={() => {
          setD(true);
        }}
      >
        졸업요건진단
      </Button>
      <Button
        style={{
          float: "right",
          marginTop: "20px",
          width: "120px",
          background: "#dcdcdc",
          borderRadius: "10px 10px 10px 10px",
          boxShadow: "3px 3px 3px #dcdcdc",
          //border: "1px solid gray",
        }}
        onClick={() => {
          setC(false);
          setD(false);
        }}
      >
        이전
      </Button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />
    </>
  );
};

export default Department;
