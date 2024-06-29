import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Notfound = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={goToLogin}>
            Back Home
          </Button>
        }
      />
    </div>
  );
};
