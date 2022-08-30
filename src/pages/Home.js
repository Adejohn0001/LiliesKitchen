import React from "react";
import '../../src/styles/pages/Home.css'
import food from "../../src/Assets/Images/mixed-food.png";
import Store from "../components/Store";
import Pasta from "../../src/Assets/Images/stir-fry-pasta.png";
import Meat from "../../src/Assets/Images/meat-balls.png";
import Burger from "../../src/Assets/Images/burger-meat.png";
import Apple from '../../src/Assets/Images/apple.png'
import Playstore from '../../src/Assets/Images/GooglePlayBadge.png'
import Instagram from '../../src/Assets/Images/instagram.png'
import Twitter from '../../src/Assets/Images/twitter.png'
import Youtube from '../../src/Assets/Images/youtube.png'
import Lilies from '../../src/Assets/Images/logo.png';
import Navbar from '../../src/components/Navbar';


const Home = () => {
  return (
    <div className="homepage">
        <nav>
            <div className="logo">
                <div><img src={Lilies} alt="logo" /> </div>
                <div><h6>Lilies</h6></div>
            </div>
            <div className="links">
              <Navbar />
            </div>
        </nav>



      <div className="header">
        <div className="header-text">
          <h1>
            Order <span>food </span>anytime, anywhere
          </h1>
          <p>
            Browse from our list of specials to place your order and have food
            delivered to you in no time. Affordable, tasty and fast!
          </p>
          <Store />
        </div>

        <div className="header-image">
          <img src={food} alt="food-pics" />
        </div>
      </div>

      <div className="main">
        <div className="main-text">
          <div>
            <h6>Special Meals of the day!</h6>
          </div>
          <div>
            <p>
              Check our sepecials of the day and get discounts on all our meals
              and swift delivery to what ever location within Ilorin.
            </p>
          </div>
        </div>

        <div className="main-image">
          <div className="pasta">
            <div>
              {" "}
              <img src={Pasta} alt="stir-fry-pasta" />{" "}
            </div>
            <div>
              {" "}
              <h6> Stir fry Pasta </h6>{" "}
            </div>
            <div>
              {" "}
              <p> Stir fry pasta yada yada yada because of Sesan</p>{" "}
            </div>
          </div>

          <div className="balls">
            <div>
              {" "}
              <img src={Meat} alt="Meat-balls" />{" "}
            </div>
            <div>
              {" "}
              <h6> Meat Balls </h6>{" "}
            </div>
            <div>
              {" "}
              <p> Stir fry pasta yada yada yada because of Sesan</p>{" "}
            </div>
          </div>

          <div className="burger">
            <div>
              {" "}
              <img src={Burger} alt="Burger-meat" />{" "}
            </div>
            <div>
              {" "}
              <h6> Burger Meat </h6>{" "}
            </div>
            <div>
              {" "}
              <p> Stir fry pasta yada yada yada because of Sesan</p>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="second-main">
        <div className="second-main-text">
          <div>
            <h6>Get notified when we update!</h6>
          </div>
          <div>
            <p>
              Get notified when we add new items to our specials menu, update
              our price list of have promos!
            </p>
          </div>
        </div>


        <div className="second-main-form">
            <div><input type="email" placeholder="gregphillips@gmail.com"/></div>
            <div><button>Get notified</button></div>
        </div>
      </div>


      <footer>
        <div className="container1">
            <div>
                <h6>Company</h6>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>

            <div>
                <h6>Support</h6>
                <p>Help Center</p>
                <p>Safety Center</p>
            </div>

            <div>
                <h6>Legal</h6>
                <p>Cookies Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
                <p>Dispute Resolution</p>
            </div>
            
            <div>
                <h6>Install App</h6>
                <img src={Playstore} alt='apple-store' /> <br />
                <img src={Apple} alt='apple-store' className='apple1'/>
            </div>
        </div>

        <div className="container2"></div>


        <div className="container3">
            <div className="container3-text"><p>© 2021 LILIES, All rights reserved</p></div>
            <div className="socials">
                <div> <img src={Instagram} alt="Instagram icon" className="insta"/> </div>
                <div> <img src={Twitter} alt="Twitter icon" className="tweet"/> </div>
                <div> <img src={Youtube} alt="Youtube icon" /> </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
