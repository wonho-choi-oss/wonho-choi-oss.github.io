import React, { useState } from "react";
import { Table, Radio, Divider } from "antd";

const TabTable = ({
  data,
  col,
  vSum,
  a,
  tabTrackVal,
  setTabTrackVal,
  setDesign,
  tabKey,
}) => {
  const [selectionType, setSelectionType] = useState("checkbox");

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      let grade = 0;
      let a = 0;
      let b = 0;
      let c = 0;
      let designCredits = 0;
      for (let i = 0; i < selectedRows.length; i++) {
        grade = grade + selectedRows[i].grade;
        if (tabKey === 1) {
          selectedRows[i].track === "시스템분석/경영공학" && (a = a + 1);
          selectedRows[i].track === "품질/정보" && (b = b + 1);
          selectedRows[i].track === "생산/물류/인간공학" && (c = c + 1);
          selectedRows[i].DesignCredits &&
            (designCredits =
              designCredits + Number(selectedRows[i].DesignCredits));
        }
      }
      vSum(grade);
      if (tabKey === 1) {
        setDesign(designCredits);
        setTabTrackVal({ ...tabTrackVal, a: a, b: b, c: c });
      }
    },

    getCheckboxProps: (record) => ({
      disabled: a ? record.subject : "",
    }),
  };
  return (
    <div style={{ width: "90%", marginLeft: "70px" }}>
      {/*       <Radio.Group
        onChange={({ target: { value } }) => {
          setSelectionType(value);
        }}
        value={selectionType}
      >
        <Radio value="checkbox">Checkbox</Radio>
        <Radio value="radio">radio</Radio>
      </Radio.Group> */}

      <Divider />

      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={col}
        dataSource={data}
        scroll={{ y: 240 }}
        pagination={false}
      />
    </div>
  );
};

export default TabTable;
