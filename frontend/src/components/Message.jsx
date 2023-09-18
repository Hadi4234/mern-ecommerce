import { Children } from "react";
import { Alert } from "react-bootstrap";

export default function Message() {
  return (
    <Alert variant={variant}>{Children}</Alert>
  )
}

Message.defaultProps = {
    variant: "info",
}
