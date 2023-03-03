import WhatToDo from "./WhatToDo";
import { rooms } from "../assets/data.js";


function Rooms() {
    return (
        <div>
            <div className="page-description">
                <h1>Rooms</h1>
                <p>
                    Nec eu ad, etiam elit, vel odio ante porttitor tristique. Donec phasellus maecenas varius, sodales platea convallis, 
                    leo ad vel taciti ipsum consectetur nostra sit. Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus 
                    litora ultricies a lorem ornare. Orci senectus ultricies, laoreet eu aliquam fames pretium. Ligula netus, rutrum placerat sed. 
                    Convallis eget nisi, quam interdum luctus vivamus. Sagittis habitasse adipiscing, ullamcorper placerat posuere imperdiet habitant.
                </p>
            </div>

            <WhatToDo items={rooms} />
            
        </div>
        
    )
}

export default Rooms;