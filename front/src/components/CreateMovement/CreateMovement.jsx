import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function CreateMovement({ show, handleClose }) {
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={"bottom"}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body></Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CreateMovement;
