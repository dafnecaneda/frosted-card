import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";

function App() {
  useEffect(() => {
    const icons = document.querySelectorAll<HTMLImageElement>(".heart, .coffe, .world");
    const btn = document.querySelector<HTMLDivElement>(".btn");

    function handleMouseEnter() {
      gsap.to(
        icons,
        { y: 0, opacity: 1, stagger: { amount: 0.2, from: "start", grid: "auto", axis: "x" }, duration: 0.5 } // Final state with stagger
      );

      gsap.to(btn, { y: 0, opacity: 1, duration: 0.5 }); // Slide up button and fade in text
    }

    function handleMouseLeave() {
      gsap.to(icons, { y: 100, opacity: 0, duration: 0.5 });
      gsap.to(btn, { y: 100, opacity: 0, duration: 0.5 }); // Slide down button and fade out text
    }

    const frostedCard = document.querySelector<HTMLDivElement>(".frostedcard");
    if (frostedCard) {
      frostedCard.addEventListener("mouseenter", handleMouseEnter);
      frostedCard.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        frostedCard.removeEventListener("mouseenter", handleMouseEnter);
        frostedCard.removeEventListener("mouseleave", handleMouseLeave);
      };
    }

    // Initial animation on mount
    handleMouseEnter();
  }, []); // Run once on mount
  
  return (
    <>
      <div className="container">
        <div className="frostedcard">
          <div className="blurbg"></div>
          <div className="avatarwrapper"></div>

          <div className="icons">
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37eae218ff0b99752dcde_heart.svg"
              className="iconstyle heart"
            />
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37ead47da6caeb10d8e43_coffee.svg"
              className="iconstyle heart"
            />
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37eada350a7820fe59538_at-sign.svg"
              className="iconstyle heart"
            />
          </div>

          <div className="contentwrapper">
            <div className="innercontent">
              <div className="centeredcontent">
                <div className="textwrapper">
                  <h2 className="heading">A Large Heading</h2>
                  <p className="paragraph">
                    Quam sed mus sed gravida at quis maecenas duis. Id nunc, et
                    cras pretium nullam nunc nec, massa accumsan.
                  </p>
                </div>
              </div>
            </div>
            <div className="btn">
              <div className="text-block">enter</div>
              <img
                src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd38746dfa3cc3899d9cbdb_arrow-up-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
