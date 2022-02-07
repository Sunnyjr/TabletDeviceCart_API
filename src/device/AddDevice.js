import React, {useState} from 'react';
import { Button, Modal , Form } from 'react-bootstrap';
import axios from 'axios';

const AddDevice = (props) => {
    let {  isAddshow, handleClose, onDeviceSubmit} = props;

    const [deviceName ,setDeviceName] = useState('');
    const [deviceType , setDeviceType] = useState('');

//     const onDeviceSubmit =(e,device) =>{ 
//     console.log("device",device);
//     //TODO need to call post api    
//     e.preventDefault(); //prevent default behavior
//     axios.post("http://192.168.0.109:8080/save",device)
//     .then(res=>{
//       console.log("res ",res);
//       onShowSuccess("Device submitted successfully.");
//       getDevicedata(); //updated the datalist
//       onAddButtonClick();  // after get the data itscalled and the close popup ;

//     })
//     .catch((error) => {
//         console.error(error);
//         onAddButtonClick();  //to close AddDevice popup when error popup.
//         onShowError("Error while adding Device");
//       })
//   }

    console.log(deviceName ==='' || deviceType === ''); //if deviceName or deviceType is empty then do button disable.
    return (
        <>
            <Modal show={isAddshow} onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title className="modeltitle">Add Device</Modal.Title>
                </Modal.Header>
                <div className="form1">
                <Form.Group className="mb-3">
                    <Form.Label>Device Name</Form.Label>
                    <Form.Control 
                    value={deviceName}
                    onChange={(e) =>setDeviceName(e.target.value)}
                    placeholder="DeviceName" />
                </Form.Group>
                </div>
                <div className="form1">
                <Form.Group className="mb-3">
                    <Form.Label>Device type</Form.Label>
                    <Form.Select 
                    value={deviceType}
                    onChange={(e) =>setDeviceType(e.target.value)} >
                        <option value={''}>None</option>
                        <option value={0}>autharized</option>
                        <option value={1}>unautharized</option> 
                    </Form.Select>
                </Form.Group>
                </div>
                 <Modal.Footer className="formbtn">
                    <div className="mb-2">
                    <Button className = "fbtn" variant="dark" size="sm" onClick={handleClose} >
                        Close
                    </Button>
                    <Button  disabled = {(deviceName ==='' || deviceType === '')}  className = "fbtn" variant="primary" size="sm" onClick={(e) => onDeviceSubmit(e,{deviceType,deviceName},true) /*runtimwObjects , true is the value of isAddMode we are passing , and passing  to  close the previous popup*/} >  
                        Save  { /* true if one of them oparand is true, return false is both  is false.*/}
                    </Button> 
                    </div>
                </Modal.Footer>
            </Modal>
        </>


    );
}
export default AddDevice;