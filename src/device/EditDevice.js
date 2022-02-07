import React ,{useState , useEffect} from 'react';
import {Button, Modal , Form} from 'react-bootstrap';
import axios from 'axios';

const EditDevice = (props) =>{ 

    let {isEditShow,onCloseDeviceClick, onDeviceSubmit, currentDevice } = props;

    const [deviceName ,setDeviceName] = useState();
    const [deviceType , setDeviceType] = useState();
    const deviceId = currentDevice.deviceId;

    useEffect(() =>{ 
        if(currentDevice) {
            setDeviceName(currentDevice.deviceName);
            setDeviceType(currentDevice.deviceType);
            console.log("useEffect render")
        }
    },[currentDevice]); //When you call useEffect in your component, this is effectively queuing or scheduling an effect to maybe run, after the render is done. After rendering finishes, useEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.


    // const onDeviceSubmit =(e,device) =>{ //need to move this function to addDeivce.
    //     console.log("device",device);
    //     //TODO need to call post api
    //     e.preventDefault(); //to prevent the default form behavior of submitting
    //     axios.post("http://192.168.0.109:8080/save",device)
    //     .then(res=>{
    //       console.log("res ",res); 
    //       onShowSuccess("Device has been saved successfully");
    //       getDevicedata();
    //       onCloseDeviceClick(); // close popup;
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         onCloseDeviceClick();
    //         onShowError("Somthing wrong ,Error While saving Device !");
            
    //       })
    //   } // add error method or msg.

      console.log(deviceName ==='' || deviceType === '');
    return(
        <>
        <Modal show={isEditShow} onHide={onCloseDeviceClick}>  {/*isEditshoe bind in show ,when isEditShow is true then modal is show || oncloseDeviceClick bind in onHide when we hit this its close the modal*/ }
            <Modal.Header closeButton >
                <Modal.Title className="modeltitle">Edit Device</Modal.Title>
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
                <Button className = "fbtn" variant="dark" size="sm" onClick={onCloseDeviceClick} >
                    Close
                </Button>
                <Button  disabled = {(deviceName ==='' || deviceType === '')}  className = "fbtn" variant="primary" size="sm" onClick={(e) => onDeviceSubmit(e,{deviceType,deviceName,deviceId}) /*runtimwObjects*/} >  
                    Save 
                </Button>
                </div>
            </Modal.Footer>
        </Modal>
    </>

    );
}
export default EditDevice;