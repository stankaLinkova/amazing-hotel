import CardService from "./CardService.jsx";
import { services } from "../assets/data.js";

function Services(props) {
    return (
        <div className="services-cards">
        {services.map(item => 
            <CardService 
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
            /> )}
        </div>
    ) 
}


export default Services;