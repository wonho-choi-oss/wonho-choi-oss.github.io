import { Button } from "antd";
import React, { useState } from "react";
import ProjectCalPage from "../projectCalPage";
import Ku from "./ku.png";
const ProjectMain = () => {
  const [divDisabled, setDivDisabled] = useState(false);
  return (
    <>
      {!divDisabled ? (
        <div
          style={{
            height: "100vh",
          }}
        >
          <img
            src={Ku}
            style={{
              width: "150px",
              height: "100px",
              marginTop: "20px",
              marginLeft: "20px",
            }}
          />
          <div style={{}}>
            <span
              style={{
                marginLeft: "30px",
                fontSize: "60px",
                fontWeight: "bold",
                fontFamily: "굴림",
              }}
            >
              졸업요건진단기
            </span>
            <span style={{ marginLeft: "20px", fontSize: "25px" }}>
              BETA{" "}
              <Button
                danger
                style={{ marginLeft: "55%" }}
                onClick={() => {
                  setDivDisabled(true);
                }}
              >
                졸업확인하기
              </Button>
            </span>
          </div>

          <div
            style={{
              marginLeft: "20px",
              marginRight: "20px",
              height: "70vh",
              border: "1px solid black",
            }}
          >
            이곳에 들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에
            들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈
            내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이
            어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지
            명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지 명확하게
            정해지면 그때 수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면
            그때 수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면 그때
            수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에
            들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈
            내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이
            어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지
            명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지 명확하게
            정해지면 그때 수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면
            그때 수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면 그때
            수정이곳에 들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에
            들어갈 내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈
            내용이 어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이
            어떤건지 명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지
            명확하게 정해지면 그때 수정이곳에 들어갈 내용이 어떤건지 명확하게
            정해지면 그때 수정
          </div>
        </div>
      ) : (
        <ProjectCalPage />
      )}
    </>
  );
};

export default ProjectMain;
