import WhatToDo from "./WhatToDo";
import { rooms } from "../assets/data.js";

import WifiIcon from '@mui/icons-material/Wifi';
import HotelIcon from '@mui/icons-material/Hotel';
import TvIcon from '@mui/icons-material/Tv';


function Rooms() {
    return (
        <div>
            <div className="page-description">
                <h1>Rooms</h1>
                <p>
                    In orci nostra, augue mattis, dapibus potenti placerat blandit donec per. 
                    Potenti praesent justo, consectetur et vehicula venenatis libero. Odio ut integer vestibulum, 
                    etiam dictum quisque, luctus nisi faucibus molestie semper sociosqu ipsum adipiscing. Neque consequat, 
                    gravida per lectus mauris. Sapien vel, netus luctus sollicitudin. 
                    Vel ut inceptos, curabitur sed condimentum platea. 
                </p>
                <div>
                    <WifiIcon fontSize="large" sx={{color: "#866124", margin: "2%"}} />
                    <HotelIcon fontSize="large" sx={{color: "#866124", margin: "2%"}} />
                    <TvIcon fontSize="large" sx={{color: "#866124", margin: "2%"}} />
                </div>
            </div>

            <WhatToDo items={rooms} />
            
        </div>
        
    )
}

export default Rooms;