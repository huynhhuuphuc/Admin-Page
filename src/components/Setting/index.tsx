import React, { useState } from "react";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import { Col, ColorPicker, DatePicker, Input, Row } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import moment from "moment";

const Setting: React.FC = () => {
  const [form] = ProForm.useForm();

  const handleChange = (date: any) => {
    const valueOfInput1 = moment(date.startDate).format();
    const valueOfInput2 = moment(date.endDate).format();
    console.log("start date", valueOfInput1);
    console.log("end date", valueOfInput2);
  };
  const { RangePicker } = DatePicker;
  const [color, setColor] = useState("");
  const [isShowSubmit, setIsShowSubmit] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <div style={{ margin: "32px 0", fontSize: "18px", color: "#1e64b6" }}>
        Settings
      </div>
      <ProForm
        onFieldsChange={() => setIsShowSubmit(true)}
        form={form}
        submitter={{
          searchConfig: {
            submitText: "Save",
          },
          resetButtonProps: {
            style: {
              // Hide the reset button
              display: "none",
            },
          },
          submitButtonProps: {
            style: {
              display: isShowSubmit ? "block" : "none",
            },
          },
        }}
      >
        <Row gutter={[16, 16]}>
          <Col>
            <ProForm.Group title="Title:" style={{ color: "#1e64b6" }}>
              <ProFormText
                rules={[
                  {
                    required: true,
                    message: "Nhập Title",
                  },
                ]}
                name="title"
                placeholder="Nhập Title"
              />
            </ProForm.Group>
          </Col>
          <Col>
            <ProForm.Group title="Email:" style={{ color: "#1e64b6" }}>
              <ProFormText
                rules={[
                  {
                    type: "email",
                    message: "Trường này không phải là Email!",
                  },
                  {
                    required: true,
                    message: "Vui lòng nhập Email!",
                  },
                ]}
                name="email"
                placeholder="Nhập địa chỉ email"
              />
            </ProForm.Group>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col>
            <ProForm.Group
              title="Background Color:"
              style={{ color: "#1e64b6" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  style={{ marginRight: "4px" }}
                  value={color}
                  onChange={(e) => {
                    setIsShowSubmit(true);
                    setColor(e.target.value);
                  }}
                />
                <ColorPicker
                  value={color}
                  onChange={(value, hex) => {
                    console.log(value);
                    setIsShowSubmit(true);
                    setColor(hex);
                  }}
                />
              </div>
            </ProForm.Group>
          </Col>
          <Col>
            <ProForm.Group title="Active date:" style={{ color: "#1e64b6" }}>
              <RangePicker
                placeholder={["Start", "End"]}
                onChange={(e) => {
                  setIsShowSubmit(true);
                  handleChange(e);
                }}
                locale={locale}
                aria-placeholder="Ngày"
              />
            </ProForm.Group>
          </Col>
        </Row>
      </ProForm>
    </div>
  );
};

export default Setting;
