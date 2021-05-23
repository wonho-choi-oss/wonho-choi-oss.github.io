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
import React, { useEffect, useState } from "react";
import { major, refinement, common } from "./data";
import { Select } from "antd";
import Track from "./track";
import Common from "./common";
import Department from "./department";

const { Option } = Select;

const { TabPane } = Tabs;

const Result = ({
  v1,
  v2,
  v3,
  totalVal,
  trackVal,
  tabTrackVal,
  comCommon,
  department,
  design,
}) => {
  const [t, setT] = useState(false);
  const [c, setC] = useState(0);
  const [d, setD] = useState(false);
  useEffect(() => {
    console.log("tabTrackVal ", tabTrackVal, trackVal);
    if (trackVal === "시스템분석/경영공학") {
      tabTrackVal.a < 9 ? setT(false) : setT(true);
    }
    if (trackVal === "품질/정보") {
      tabTrackVal.b < 10 ? setT(false) : setT(true);
    }
    if (trackVal === "생산/물류/인간공학") {
      tabTrackVal.a < 8 ? setT(false) : setT(true);
    }
    let cc = 0;

    comCommon.a && (cc = cc + 1);
    comCommon.b && (cc = cc + 1);
    comCommon.c && (cc = cc + 1);
    comCommon.d && (cc = cc + 1);
    comCommon.e && (cc = cc + 1);
    comCommon.f && (cc = cc + 1);
    if (department.a === true || department.b === true) {
      setD(true);
    }
    setC(cc);
  }, []);

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
    <>
      <Card
        style={{
          width: "1250px",
          border: "1px solid gray",
          marginTop: "10px",
          borderRadius: "20px 20px 20px 20px",
          textAlign: "center",
        }}
      >
        {[
          [
            `전공 이수학점 ${v1}학점/136학점으로 ${
              v1 < 136 ? "불만족하였습니다." : "만족하였습니다."
            }`,
            v1 < 136 ? "red" : "#41A541",
          ],
          [
            `교양 이수학점 ${v2 + v3}학점/51학점으로 ${
              v2 + v3 < 51 ? "불만족하였습니다." : "만족하였습니다."
            }`,
            v2 + v3 < 51 ? "red" : "#41A541",
          ],
          [
            `설계 학점 ${design}학점/12학점으로 ${
              design < 12 ? "불만족하였습니다." : "만족하였습니다."
            }`,
            design < 12 ? "red" : "#41A541",
          ],
          [
            `트랙 이수가 ${t ? "완료 되었습니다." : "완료되지 않았습니다."}`,
            !t ? "red" : "#41A541",
          ],
          [
            `MSC 이수학점이 ${v2}학점/30학점으로 공학인증을 ${
              v2 < 30 ? "불만족하였습니다." : "만족하였습니다."
            }`,
            v2 < 30 ? "red" : "#41A541",
          ],
          [
            `공통 졸업요건을 ${
              c < 3 ? "불만족하였습니다." : "만족하였습니다."
            }`,
            c < 3 ? "red" : "#41A541",
          ],
          [
            `학과 졸업요건을 ${!d ? "불만족하였습니다." : "만족하였습니다."}`,
            !d ? "red" : "#41A541",
          ],
        ].map((a, index) => {
          return (
            <>
              <div
                style={{
                  width: "90%",
                  background: a[1],
                  height: "40px",
                  marginLeft: "5%",
                }}
              >
                <span style={{ color: "white", fontSize: "25px" }}>{a[0]}</span>
              </div>
              {index === 6 ? "" : <br />}
            </>
          );
        })}
      </Card>
    </>
  );
};

export default Result;
