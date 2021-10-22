import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";

function Login() {
    const values = [true, "sm-down", "md-down", "lg-down", "xl-down", "xxl-down"];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((m, id) => (
                <Button key={id} className="me-2" onClick={() => handleShow(m)}>
                    Full screen
                    {typeof m === "string" && `below ${m.split("-")[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal body content</Modal.Body>
            </Modal>
        </>
    );
}

export default Login;