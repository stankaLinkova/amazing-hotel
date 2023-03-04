import ImgSlide from "./ImgSlide";

function WhatToDo(props) {

    function fillImgSlide(item, idx) {
      let section = '';
      if (item.sectionNumber === 0) {
        section = "odd" 
      } else {
        section = "even"
      }

      return (
        <ImgSlide 
            key={item.id}
            id={item.id}
            sectionNumber={section} 
            title={item.title} 
            description={item.description}
            imgUrl={item.imgUrl}
        />
      )
    }

    return (
        <div>
            {props.items.map((item, idx) => fillImgSlide(item, idx) )}
        </div>
    )
}

export default WhatToDo;