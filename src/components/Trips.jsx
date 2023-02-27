import ImgSlide from "./ImgSlide";

function Trips() {
    return (
        <div className="main-pages">

            <ImgSlide 
               sectionNumber="odd" 
               title="Boat and Lake" 
               description="Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus."
               imgUrl="/images/nature_trips.png"
            />

            <ImgSlide 
               sectionNumber="even" 
               title="Climbing in nature" 
               description="Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus."
               imgUrl="/images/climbing_nature.png"
            />

        </div>
    )
}

export default Trips;