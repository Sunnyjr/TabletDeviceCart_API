
import plusecounter from '../image/plusecounter.png';
import minuscounter from '../image/minuscounter.png';
import _ from "lodash";


export default function DiviceList(props) {

    const { text, type, result , onDiviceClick ,onNameClick ,onDeleteButtonClick , onShowError, onShowSuccess } = props;
    

    console.log("result ....",result);
   

    return (

        <div clasName="row" id='boxconatainer'>
            
            <div className="box">
                <div className="row p-2">
                    <span>{text}</span>

                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                        { result.map((ele,i) => { 
                            return (
                                <div className="row" key={i}>
                                <div className="col-9 col-md-9 col-sm-9 col-xs-9 col-lg-9">
                                   <span onClick={ () => {onNameClick(ele)}}>{ele.deviceName}</span>
                                </div>
                                <div id ="deviceimage" className="col-3 col-md-3 col-sm-3 col-xs-3 col-lg-3">
                                    {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} onClick={()=>{ onDiviceClick(ele,i) }}/> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} onClick={()=>{ onDiviceClick(ele,i) }}/>}
                                    <span id="devicespan"  onClick={ () => {onDeleteButtonClick(ele.deviceId , onShowError, onShowSuccess)}}><i className="fas fa-trash-alt"></i></span>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>


    );
};

// {type === 1? ele.Object1 : ele.Object2 }
{/* <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 2
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 3
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 4
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 5
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 6
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 7
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-10 col-sm-10 col-xs-10 col-lg-10">
                                Device 8
                            </div>
                            <div className="col-2 col-md-2 col-sm-2 col-xs-2 col-lg-2">
                                {type === 1 ? <img src={plusecounter} style={{ height: '20px', width: '20px' }} /> : <img src={minuscounter} style={{ height: '20px', width: '20px' }} />}
                            </div>
                        </div> */}