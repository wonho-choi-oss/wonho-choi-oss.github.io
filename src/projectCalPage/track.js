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

const { Option } = Select;

const { TabPane } = Tabs;

// 셋 중 하나 선택 시 선택한 트랙은 모두 체크가 돼있어야함
const Track = ({ a, b, setA, setB, setTrackVal }) => {
  return (
    <>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        이수트랙 선택
      </span>
      <br />
      <Card
        style={{
          width: "1250px",
          border: "1px solid gray",
          marginTop: "10px",
          borderRadius: "20px 20px 20px 20px",
          textAlign: "center",
        }}
      >
        <Radio.Group
          name="radiogroup"
          defaultValue={"시스템분석/경영공학"}
          style={{ fontWeight: "bold" }}
          disabled={b}
        >
          <Radio
            value={"시스템분석/경영공학"}
            onClick={(e) => setTrackVal(e.target.value)}
          >
            시스템분석/경영공학
          </Radio>
          <Radio
            value={"품질/정보"}
            style={{ marginLeft: "40px" }}
            onClick={(e) => setTrackVal(e.target.value)}
          >
            품질/정보
          </Radio>
          <Radio
            value={"생산/물류/인간공학"}
            style={{ marginLeft: "40px" }}
            onClick={(e) => setTrackVal(e.target.value)}
          >
            생산/물류/인간공학
          </Radio>
        </Radio.Group>
      </Card>
      <Button
        style={{
          width: "120px",
          float: "right",
          marginTop: "20px",
          marginLeft: "10px",
          background: "#A0D1F7",
          borderRadius: "10px 10px 10px 10px",
          boxShadow: "3px 3px 3px #A0D1F7",
          //border: "1px solid gray",
        }}
        onClick={() => {
          setB(true);
        }}
      >
        다음
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
          setA(false);
        }}
        disabled={b}
      >
        이전
      </Button>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Track;
