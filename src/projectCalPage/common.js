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

// 두개 이상 체크가 되어야함
const Common = ({ c, setB, setC, comCommon, setComCommon }) => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <>
      <span
        style={{
          width: "120px",
          fontSize: "20px",
          fontWeight: "bold",
          borderRadius: "20px 20px 20px 20px",
        }}
      >
        공통 졸업요건 진단
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
        <div
          style={{
            pointerEvents: c && "none",
            opacity: c && "0.4",
          }}
        >
          <Tooltip title="심화 전공 인증">
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, a: e.target.checked });
              }}
              style={{ fontWeight: "bold" }}
            >
              심화 전공 인증
            </Checkbox>
          </Tooltip>
          <Tooltip title="외국어 인증">
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, b: e.target.checked });
              }}
              style={{ marginLeft: "300px", fontWeight: "bold" }}
            >
              외국어 인증
            </Checkbox>
          </Tooltip>
          <Tooltip title="다전공 인증">
            <br />
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, c: e.target.checked });
              }}
              style={{ fontWeight: "bold" }}
            >
              다전공 인증
            </Checkbox>
          </Tooltip>
          <Tooltip title="독서토론 인증">
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, d: e.target.checked });
              }}
              style={{ marginLeft: "318px", fontWeight: "bold" }}
            >
              독서토론 인증
            </Checkbox>
          </Tooltip>
          <Tooltip title="현장실습 인증">
            <br />
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, e: e.target.checked });
              }}
              style={{ fontWeight: "bold" }}
            >
              현장실습 인증
            </Checkbox>
          </Tooltip>
          <Tooltip title="KGU포인트 140점 이상">
            <Checkbox
              onChange={(e) => {
                setComCommon({ ...comCommon, f: e.target.checked });
              }}
              style={{ marginLeft: "304px", fontWeight: "bold" }}
            >
              KGU포인트 140점 이상
            </Checkbox>
          </Tooltip>
        </div>
      </Card>
      <Button
        style={{
          float: "right",
          marginTop: "20px",
          width: "120px",
          marginLeft: "10px",
          background: "#A0D1F7",
          borderRadius: "10px 10px 10px 10px",
          boxShadow: "3px 3px 3px #A0D1F7",
          //border: "1px solid gray",
        }}
        onClick={() => {
          setC(true);
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
          setB(false);
        }}
        disabled={c}
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

export default Common;
