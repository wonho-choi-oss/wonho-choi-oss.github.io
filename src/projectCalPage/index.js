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
import React, { useCallback, useMemo, useState } from "react";
import {
  major,
  refinement,
  common,
  columns1,
  columns2,
  columns3,
} from "./data";
import { Select } from "antd";
import Track from "./track";
import Common from "./common";
import Department from "./department";
import Result from "./result";

const { Option } = Select;

const { TabPane } = Tabs;

const ProjectCalPage = () => {
  const [v1, setValue1] = useState(0);
  const [v2, setValue2] = useState(0);
  const [v3, setValue3] = useState(0);
  const [totalVal, setTotalVal] = useState(0);
  const [trackVal, setTrackVal] = useState("시스템분석/경영공학");
  const [tabTrackVal, setTabTrackVal] = useState({
    a: "",
    b: "",
    c: "",
    d: 9,
    e: 10,
    f: 8,
  });
  const [comCommon, setComCommon] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  const [design, setDesign] = useState(0);
  const [department, setDepartment] = useState({ a: false, b: false });
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [c, setC] = useState(false);
  const [d, setD] = useState(false);
  const callback = (key) => {
    console.log(key);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Card
      style={{
        width: "95%",
        marginLeft: "38px",
        marginTop: "38px",
        border: "1px solid gray",
        borderRadius: "20px 20px 20px 20px",
      }}
    >
      <hr />
      <span
        style={{ fontWeight: "bold", fontSize: "40px", marginLeft: "15px" }}
      >
        졸업요건진단
      </span>
      <hr />
      <hr />
      <div style={{ marginTop: "20px" }}>
        <div>
          <Tabs onChange={callback} type="card">
            <TabPane tab="전공" key="1">
              <TabTable
                data={major}
                col={columns1}
                vSum={setValue1}
                a={a}
                tabTrackVal={tabTrackVal}
                setTabTrackVal={setTabTrackVal}
                setDesign={setDesign}
                tabKey={1}
              />
            </TabPane>
            <TabPane tab="MSC" key="2">
              <TabTable
                data={refinement}
                col={columns2}
                vSum={setValue2}
                key={2}
                a={a}
              />
            </TabPane>
            <TabPane tab="필수 교양" key="3">
              <TabTable data={common} col={columns3} vSum={setValue3} a={a} />
            </TabPane>
          </Tabs>
          <br />
          <span style={{ fontSize: "15px", marginLeft: "80px" }}>
            전공 : {v1}
          </span>
          <span style={{ fontSize: "15px", marginLeft: "80px" }}>
            MSC : {v2}
          </span>
          <span style={{ fontSize: "15px", marginLeft: "80px" }}>
            필수 교양 : {v3}
          </span>
        </div>
        <div style={{ float: "left", marginLeft: "70px", marginTop: "50px" }}>
          <Card
            style={{
              width: "1250px",
              border: "0px solid white",
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              총 이수 학점 입력
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                marginLeft: "350px",
              }}
            >
              교양 이수 학점
            </span>
            <br />
            <Input
              placeholder=""
              style={{
                width: "300px",
                marginTop: "10px",
                border: "1px solid gray",
              }}
              onKeyUp={(e) => {
                setTotalVal(e.target.value);
              }}
            />
            <Input
              placeholder=""
              style={{
                width: "300px",
                marginTop: "10px",
                border: "1px solid gray",
                marginLeft: "205px",
              }}
              readOnly={true}
              value={Number(totalVal) - Number(v1)}
            />

            <Button
              style={{
                float: "right",
                marginTop: "20px",
                width: "120px",
                marginRight: "-25px",
                background: "#A0D1F7",
                borderRadius: "10px 10px 10px 10px",
                boxShadow: "3px 3px 3px #A0D1F7",
                //border: "1px solid gray",
              }}
              onClick={() => {
                setA(true);
              }}
            >
              다음
            </Button>
            {/* {a && (
              <Button
                style={{
                  float: "right",
                  marginTop: "20px",
                  width: "120px",
                  background: "#dcdcdc",
                  borderRadius: "10px 10px 10px 10px",
                  boxShadow: "3px 3px 3px #dcdcdc",
                  marginRight: "10px",
                  //border: "1px solid gray",
                }}
                onClick={() => {
                  setA(false);
                }}
              >
                이전
              </Button>
            )} */}
          </Card>
          <br />
          <br />
          <br />
          <br />

          {a && (
            <Track
              a={a}
              b={b}
              setA={setA}
              setB={setB}
              setTrackVal={setTrackVal}
            />
          )}
          {b && (
            <Common
              b={d}
              c={c}
              setB={setB}
              setC={setC}
              comCommon={comCommon}
              setComCommon={setComCommon}
            />
          )}
          {c && (
            <Department
              d={d}
              setC={setC}
              setD={setD}
              department={department}
              setDepartment={setDepartment}
            />
          )}
          {d && (
            <Result
              v1={v1}
              v2={v2}
              v3={v3}
              totalVal={totalVal}
              trackVal={trackVal}
              tabTrackVal={tabTrackVal}
              comCommon={comCommon}
              department={department}
              design={design}
            />
          )}
        </div>
      </div>
    </Card>
  );
};
export default ProjectCalPage;
