
import './App.css';
import SideBar from './sidebar/SideBar';
import DiviceList from './device/DiviceList';
import footer from './image/footer.png';
import React from 'react'
import axios from 'axios';
import AddDevice from './device/AddDevice';
import EditDevice from './device/EditDevice';
import ErrorMessage from './errormodal/ErrorMessage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // blobal variables decalration;
      datalist: [], //declare empty array
      isAddshow: false,
      isEditShow: false,
      currentDevice: {}, //declare empty object
      isErrorModalShow: false,
      message: '',
      header: ''

    };

  }
  getDevicedata = () => {
    axios.get('http://192.168.0.109:8080/getAllDevices')
      .then(response => {
        console.log(response);
        this.setState({ datalist: response.data });
      })
      .catch((error) => {
        console.error(error);
        this.onShowError("Error plz wait we are trying to connect with server !");
        // this.setState({errorMsg : "Error plz wait we are trying to connect with server !"})
      })
  }
  componentDidMount() {

    this.getDevicedata();
  }

  onDiviceClick = (ele, i) => {
    let datalist = this.state.datalist;
    if (ele.deviceType == '0') {
      ele.deviceType = '1'; // change the type 
    }
    else {
      ele.deviceType = '0'; //if not remains same
    }
    //post api 
    axios.post("http://192.168.0.109:8080/save", ele)
      .then(response => {
        //console.log(response);
        this.getDevicedata()
      })
      .catch((error) => {
        console.log(error);
      })
    // datalist[i] = ele; //assign ele in datalist
    // this.setState({ datalist: datalist }); // tell the actual state  that the state is updated    
  }

   onDeviceSubmit =(e,device , issAddMode) =>{ //need to move this function to addDeivce.
    console.log("device",device);
    //TODO need to call post api
    e.preventDefault(); //to prevent the default form behavior of submitting
    axios.post("http://192.168.0.109:8080/save",device)
    .then(res=>{
      console.log("res ",res); 
      this.onShowSuccess("Device has been saved successfully"); //close popup;
      this.getDevicedata();
      
     if(issAddMode == true){  //pass issAddMode becouse we have to call one method at a time.
      this.onAddButtonClick();
     }else {
     this.onCloseDeviceClick();
     }

    })
    .catch((error) => {
        console.error(error);
        // onCloseDeviceClick();
        this.onShowError("Somthing wrong ,Error While saving Device !");
        
        if(issAddMode == false){
          this.onAddButtonClick();
         }else {
          this.onCloseDeviceClick();
         }
      })
  } // add error method or msg.

  onAddButtonClick = () => {
    this.setState({ isAddshow: !this.state.isAddshow }); //toggaling (if isAddshow false then its true and wiseversa.)true if the oparand is false.
  }
  onDeleteButtonClick = (elementId) => {
    axios.delete("http://192.168.0.109:8080/delete/" + elementId)
      .then(response => {
        console.log(response,"delete data");
        this.onShowSuccess("Device has been deleted successfully");
        this.getDevicedata();
      })
      .catch((error) => {
        console.error(error);
        // onCloseDeviceClick();
        this.onShowError("Somthing wrong !,Error While Deleting Device ");
        
      })
  } // todo delete msg
  
  onNameClick = (ele) => {
    this.setState({ isEditShow: true, currentDevice: ele });
  }
  onCloseDeviceClick = () => {
    this.setState({ isEditShow: false })
  }
  //error message fucntion
  onShowError = (message) => {
    this.setState({ isErrorModalShow: !this.state.isErrorModalShow, message: message, header: "Error" })
  }
  onShowSuccess = (message) => {
    this.setState({ isErrorModalShow: !this.state.isErrorModalShow, message: message, header: "Success" })
  }
  // onCloseShowError = () => {
  //   this.setState({ isErrorModalShow: false })
  // }

  render() {

    let datalist = this.state.datalist;
    let autharized = datalist.filter(obj => obj.deviceType == '0');
    console.log("autharized...", autharized);
    let unautharized = datalist.filter(obj => obj.deviceType == '1');
    console.log(" anautharized....", unautharized);
    // unautharized = [];
    return (
      <div className="App">
        <div className="container-fluid p-0 m-0">
          <div className="row m-0 p-0 " id='mainrow' >
            <div className="col-md-3 col-3 p-0 m-0" id="sidebar">
              {/* sidebar */}
              <SideBar />
            </div>
            <div className="col-md-9 col-9 p-0 m-0">
              {/* 1st row*/}
              {/* <Buttons  /> */}
              <div className="addbtn">
                <button type="button" class="btn btn-primary btn-lg" onClick={this.onAddButtonClick} >Add Device</button>
                {this.state.isAddshow && <AddDevice onShowSuccess={this.onShowSuccess} onShowError={this.onShowError} onAddButtonClick={this.onAddButtonClick} getDevicedata={this.getDevicedata} isAddshow={this.state.isAddshow} handleClose={this.onAddButtonClick} onDeviceSubmit={this.onDeviceSubmit} />}
                {/* if isAddshow is turn ture then its popup the AddDevice. return true if both the oparands are ture,else return false.*/}
              </div>

              <div className="errormsg">{this.state.errorMsg ? <div>{this.state.errorMsg}</div> : null}</div>
              <div>
                {this.state.isEditShow && <EditDevice onShowSuccess={this.onShowSuccess} onShowError={this.onShowError} isEditShow={this.state.isEditShow} currentDevice={this.state.currentDevice} onCloseDeviceClick={this.onCloseDeviceClick} getDevicedata={this.getDevicedata} onDeviceSubmit={this.onDeviceSubmit}/>}
              </div>

              {/* device 2nd row*/}
              {autharized.length !== 0 && <DiviceList result={autharized} onDiviceClick={this.onDiviceClick} onNameClick={this.onNameClick} onDeleteButtonClick={this.onDeleteButtonClick} onShowSuccess={this.onShowSuccess} onShowError={this.onShowError} text={'Autharized Device'} type={1} />}

              {unautharized.length !== 0 && <DiviceList result={unautharized} onDiviceClick={this.onDiviceClick} onNameClick={this.onNameClick} onDeleteButtonClick={this.onDeleteButtonClick} onShowSuccess={this.onShowSuccess} onShowError={this.onShowError} text={'Unautharized Device'} type={0} />}
                {/* if not equal to 0 data matlab data hay  in a autharized and unautharized then DiviceList show honga otherwise not.
                    return true if value is same but datatype is different. */ }

              {/*for error Message */}
              {this.state.isErrorModalShow && <ErrorMessage onShowSuccess={this.onShowSuccess} message={this.state.message} isErrorModalShow={this.state.isErrorModalShow} onShowError={this.onShowError} header={this.state.header}/>}
            </div>
            <div className="footer">
              <img src={footer} style={{ height: '40px', width: '1210px' }} />
            </div>
          </div>

        </div>
      </div>

    );

  }
};

export default App;
