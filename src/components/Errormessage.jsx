import Alert from "react-bootstrap/Alert";

import React from "react";

const Errormessage = ({ variant = "danger", children }) => {
  return (
    <>
      <Alert key={variant} variant={variant}>
        <strong>{children}</strong>
        {/* <strong>error</strong> */}
      </Alert>
    </>
  );
};

export default Errormessage;
