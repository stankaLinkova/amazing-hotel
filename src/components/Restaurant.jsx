import ImgSlide from "./ImgSlide";

function Restaurant() {
    return (
        <div className="main-pages">
            <ImgSlide 
               sectionNumber="odd" 
               title="Food" 
               description="Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus."
               imgUrl="/images/delicious_food.png"
            />

            <ImgSlide 
               sectionNumber="even" 
               title="Drinks" 
               description="Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus."
               imgUrl="/images/refreshing_drinks.png"
            />

            <ImgSlide 
               sectionNumber="odd" 
               title="Brunch" 
               description="Quis pharetra neque ad, rhoncus leo inceptos, suspendisse rutrum luctus."
               imgUrl="/images/brunch.png"
            />

        </div>
    )
}

export default Restaurant;