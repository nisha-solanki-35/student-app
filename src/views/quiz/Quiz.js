import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import Images from "./images";

const Quiz = (props) => {
    // console.log("in quiz", props);
  let history = useHistory();
  let { path, url } = useRouteMatch();
  // console.log("history", history);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === Images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? Images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = Images.map((image) => {
    // console.log("in images ", image);
    const handleOnclick = (e, link) => {
      // if(localStorage.getItem("token")){
        // console.log("link", link);
        history.push(link);
      // }
      // else {
      //   <Redirect to="/" />;
      // }
    }
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={image.title}
      >
        <img src={image.img} alt="Not found"  style={{cursor:"pointer", height:"350px", width:"500px"}}
          onClick={e=>handleOnclick(e, `${url}/${image.url}`)} />
      </CarouselItem>
    );
  });

  return (
    <div style={{backgroundColor:"black", margin:"100px"}} id="quiz">
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
        <CarouselIndicators items={Images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    </div>
  );
}

export default Quiz;