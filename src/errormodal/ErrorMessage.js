import React from "react";
import { Modal , Button } from "react-bootstrap";

const ErrorMessage = (props) => {

    let { onShowError, message, header , onShowSuccess} = props;

    return (

        <>
            <Modal show={onShowError , onShowSuccess} onHide={onShowError , onShowSuccess}>
                <Modal.Header closeButton >
                    <Modal.Title className="modeltitle">{header}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p >{message}</p>
                </Modal.Body>
                
                <Modal.Footer className="formbtn">
                    <div className="mb-2">
                        <Button className="fbtn" variant="dark" size="sm" onClick={onShowError, onShowSuccess} >
                            Close
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>


    );
}
export default ErrorMessage;