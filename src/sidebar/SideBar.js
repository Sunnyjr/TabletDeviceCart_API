
import Tabletmenu from '../image/Tabletmenu.png';
import device from '../image/device.png';
import searchbar from '../image/searchbar.png';
function SideBar() {

    return (
        <div className="sidebardiv">
             <div className="row" id="preparation">
                    <h5> <img src={Tabletmenu} style={{ height:'20px', width:'20px' }} /> Tabletmenukaart</h5>
             </div>

            
            <div className="row">
                <div className="image-row" id="blue-row">
                 {'<'} <img src={device} style={{ height:'21px', width:'21px' }} /> Authorized Devices 
                </div>
            </div>
            <div className="row">
                <div className="image-row">
                  <img src={searchbar} style={{ height:'30px', width:'200px' }}/>                 
                </div>
            </div>
      </div>
    );
};
export default SideBar;
