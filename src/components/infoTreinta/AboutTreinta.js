import React, { useState } from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    ListGroup,
    ListGroupItem,
    CardHeader
  } from 'reactstrap';
  import "./../../assets/css/aboutTreinta.css"
import {itemsCard_1,itemsCard_2,itemsCard_3} from "./itemsCarousel";
import { advantages } from './itemsAdvantages';
import NavbarComponent from '../dashboard/navbar'
import PopoverItem from './popoverItem';
import PlayStoreIcon from "./../../assets/img/googlePlay.png"

const AboutTreinta = () => {

  const [activeIndexCard1, setActiveIndexCard1] = useState(0);
  const [animatingCard1, setAnimatingCard1] = useState(false);

  const [activeIndexCard2, setActiveIndexCard2] = useState(0);
  const [animatingCard2, setAnimatingCard2] = useState(false);

  const [activeIndexCard3, setActiveIndexCard3] = useState(0);
  const [animatingCard3, setAnimatingCard3] = useState(false);

  const nextCard1 = () => {
    if (animatingCard1) return;
    const nextIndex = activeIndexCard1 === itemsCard_1.length - 1 ? 0 : activeIndexCard1 + 1;
    setActiveIndexCard1(nextIndex);
  }

  const previousCard1 = () => {
    if (animatingCard1) return;
    const nextIndex = activeIndexCard1 === 0 ? itemsCard_1.length - 1 : activeIndexCard1 - 1;
    setActiveIndexCard1(nextIndex);
  }

  const goToIndexCard1 = (newIndex) => {
    if (animatingCard1) return;
    setActiveIndexCard1(newIndex);
  }

  const nextCard2 = () => {
    if (animatingCard2) return;
    const nextIndex = activeIndexCard2 === itemsCard_2.length - 1 ? 0 : activeIndexCard2 + 1;
    setActiveIndexCard2(nextIndex);
  }

  const previousCard2 = () => {
    if (animatingCard2) return;
    const nextIndex = activeIndexCard2 === 0 ? itemsCard_2.length - 1 : activeIndexCard2 - 1;
    setActiveIndexCard2(nextIndex);
  }

  const goToIndexCard2 = (newIndex) => {
    if (animatingCard2) return;
    setActiveIndexCard2(newIndex);
  }

  const nextCard3 = () => {
    if (animatingCard3) return;
    const nextIndex = activeIndexCard3 === itemsCard_3.length - 1 ? 0 : activeIndexCard3 + 1;
    setActiveIndexCard3(nextIndex);
  }

  const previousCard3 = () => {
    if (animatingCard3) return;
    const nextIndex = activeIndexCard3 === 0 ? itemsCard_3.length - 1 : activeIndexCard3 - 1;
    setActiveIndexCard3(nextIndex);
  }

  const goToIndexCard3 = (newIndex) => {
    if (animatingCard3) return;
    setActiveIndexCard3(newIndex);
  }

  const slidesCard1 = itemsCard_1.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimatingCard1(true)}
        onExited={() => setAnimatingCard1(false)}
      >
        <img src={item.src} alt={item.altText} style={{height:'300px', width:'100%'}}/>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  const slidesCard2 = itemsCard_2.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimatingCard2(true)}
        onExited={() => setAnimatingCard2(false)}
      >
        <img src={item.src} alt={item.altText} style={{height:'300px', width:'100%'}}/>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });

  const slidesCard3 = itemsCard_3.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimatingCard3(true)}
        onExited={() => setAnimatingCard3(false)}
      >
        <img src={item.src} alt={item.altText} style={{height:'300px', width:'100%'}}/>
        <CarouselCaption className="text-light" captionText={item.caption} captionHeader={item.header} />
      </CarouselItem>
    );
  });
  
  return (
    <>
      <NavbarComponent/>
      <br/>
      <div className="container-fluid">
        <div className="row">
           <div className="col-md-12" >
             <h4 className="d-flex justify-content-center">Treinta Colombia</h4>
             <hr/>
            </div>            
                <div className="col-md-4">
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h5">Formalize your business!</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">
                                    *Valid only for Colombia
                                </CardSubtitle>
                        </CardHeader>
                        <div>
                        <Carousel
                            activeIndex={activeIndexCard2}
                            next={nextCard2}
                            previous={previousCard2}
                        >
                            <CarouselIndicators items={itemsCard_2} activeIndex={activeIndexCard2} onClickHandler={goToIndexCard2} />
                            {slidesCard2}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousCard2} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={nextCard2} />
                        </Carousel>
                        </div>
                        <CardBody>
                            <CardText className="text-justify">
                                Formalizing your business brings great opportunities for you, your employees and your family. 
                            </CardText>
                            <CardText className="text-justify">
                                You will be able to enjoy important benefits, see your business grow and prosper, access government aid, training and even work hand in hand with other companies. 
                            </CardText>
                            <CardText className="text-justify">
                                <a href="https://www.treinta.co/formaliza-tu-negocio/" target="_blank">What are you waiting for?</a>
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h5">Free financial application</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                            <a href="https://www.treinta.co/" target="_blank">
                                treinta.co
                            </a>
                        </CardSubtitle>
                    </CardHeader>
                    <div>
                    <Carousel
                        activeIndex={activeIndexCard1}
                        next={nextCard1}
                        previous={previousCard1}
                    >
                        <CarouselIndicators items={itemsCard_1} activeIndex={activeIndexCard1} onClickHandler={goToIndexCard1} />
                        {slidesCard1}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousCard1} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={nextCard1} />
                    </Carousel>
                    </div>
                    <CardBody>
                        <CardText className="text-justify">
                            Manage your business transactions, know the utility of your business at any time and register and collect debts 3 times more efficiently.
                        </CardText>
                        <CardText className="text-justify">
                            Help your business grow more with Treinta, the free financial application. Treinta is free, safe and easy to use!
                        </CardText>
                        <CardText className="text-justify">
                        <a href="https://play.google.com/store/apps/details?id=com.treintaapp" target="_blank">
                        Download now! <img src={PlayStoreIcon} alt="icon-google-play" style={{width:'20px', height:'20px'}}/>
                          </a>
                        </CardText>
                    </CardBody>
                </Card>
                </div>
                <div className="col-md-4">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h5">You will receive what you need and more</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                                        Become one of them. Don't wait any longer!
                                    </CardSubtitle>
                            </CardHeader>
                        <div>
                          <Carousel
                              activeIndex={activeIndexCard3}
                              next={nextCard3}
                              previous={previousCard3}
                          >
                            <CarouselIndicators items={itemsCard_3} activeIndex={activeIndexCard3} onClickHandler={goToIndexCard3} />
                            {slidesCard3}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previousCard3} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={nextCard3} />
                          </Carousel>
                        </div>
                <CardBody>
                <ListGroup>
                    <ListGroupItem>Personalized attention and accompaniment during the process</ListGroupItem>
                    <ListGroupItem>Articles of Association of your company</ListGroupItem>
                    <ListGroupItem>Letter of acceptance of legal representation</ListGroupItem>                    
                </ListGroup>
                </CardBody>
            </Card>
                </div>                
        </div>
        <br/>
        <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-12" >
              <h4 className="text-center">Discover the advantages of using Treinta</h4>
              <hr/>
          </div>
          <div className="col-xs-12">
            {advantages.map((popover, i) => {
                return (
                  <>
                    <PopoverItem key={i} item={popover} id={i} />
                  </>
                )
              })}
          </div>
      </div>
        </div>        
      </div>        
    </>
    )
}

export default AboutTreinta
