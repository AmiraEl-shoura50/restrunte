import React, { Fragment }  from "react";
import Header from "./header";
import './home.css';
import img from './../../imgs/photo1.png';
import pho from './../../imgs/img1.png';
import Data from "../../Data";
import Carousel from 'react-bootstrap/Carousel';
import per1 from "./../../imgs/person1.jpg";
import per2 from "./../../imgs/person2.jpg";
const Home =()=> {
   const dataItem=Data.map((item)=>{
      return(
            <div className="col-md-4" key={item.title}>
                <div className="box">
                  <img src={item.img}/>
                  <h5>{item.title}</h5>
                  <span>{item.time}</span>
                  <h6>{item.price}</h6>
                </div>
                <button className="butn"> Order Now</button>
            </div>
      );

   })
    return(
          <Fragment>
            <Header/>
            <section className="nums">
                 <div className="container">
                      <div className="row">
                            <div className="col-md-3">
                               <h1>1287+</h1>
                               <h6>SAVINGS</h6>
                            </div>
                            <div className="col-md-3">
                               <h1>5786+</h1>
                               <h6>PHOTOS</h6>
                            </div>
                            <div className="col-md-3">
                               <h1>1440+</h1>
                               <h6>ROCKETS</h6>
                            </div>
                            <div className="col-md-3">
                               <h1>7110+</h1>
                               <h6>GLOBES</h6>
                            </div>
                      </div>
                 </div>
            </section>
            <section className="pride">
                <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                            <img src={img} />
                      </div>
                      <div className="col-md-6">
                         <h2>We pride ourselves on making real food from the best ingredients.</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                         <button><a href="#">Learn more </a></button>
                      </div>
                  </div>
                </div>
            </section>
            <section className="ingredients" >
                 <div className="container">
                     <div className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                              <li>Etiam sed dolor ac diam volutpat.</li>
                              <li>Erat volutpat aliquet imperdiet.</li>
                              <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button> <a href="#"> Learn more </a></button>
                        </div>
                        <div className="col-md-6">
                           <img src={pho}/>
                        </div>
                     </div>
                 </div>
            </section>
            <section className="paralex">
               <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                         <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br/> finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                         <a href="#">Watch Our Story</a>
                    </div>
                  </div>
               </div>

            </section>
            <section className="blog">
               <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
                         <h2>Explore Our Foods</h2>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet<br/> leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
                        
                    </div>
                  </div>
                  <div className="row">
                           {dataItem}
                  </div>
               </div>   
            </section>
            <section className="slid">
               <div className="container">
                  <div  className="row">
                      <div className="col-md-12">
                            <h2> Testimonials </h2>
                        </div>
                  </div>
                  <div className="row">
                     <div className="col-md-12">

                                    <Carousel slide={false}>
                                    <Carousel.Item>
                                        <img src={per1} />
                                       <Carousel.Caption>
                                          <span><h3>Gui desiner </h3></span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                       </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                       <img src={per2}/>
                                       <Carousel.Caption>
                                          <span><h3>UI/UX desiner</h3></span>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                       </Carousel.Caption>
                                    </Carousel.Item>
                           </Carousel>
              
                      </div>
                 </div>
            </div>
           </section>
          </Fragment>

    );
}

export default Home