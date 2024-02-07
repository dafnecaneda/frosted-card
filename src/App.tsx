import "./App.css";
import { useEffect } from "react";
import gsap from "gsap";
import VanillaTilt from "vanilla-tilt";

function App() {
  useEffect(() => {

    VanillaTilt.init(document.querySelector<HTMLDivElement>(".frostedcard")!, {
      reverse: true
    });
    const icons = document.querySelectorAll<HTMLImageElement>(
      ".heart, .coffee, .sign"
    );
    const btn = document.querySelector<HTMLDivElement>(".btn");
    const textBlock = document.querySelector<HTMLDivElement>(".text-block");

    gsap.set(icons, { y: 100, opacity: 0 });
    gsap.set(btn, { y: 100, opacity: 1 }); 
    gsap.set(textBlock, { opacity: 0 });

    function handleMouseEnter() {
      gsap.to(
        icons,
        {
          y: 0,
          opacity: 1,
          stagger: { amount: 0.2, from: "start", grid: "auto", axis: "x" },
          duration: 0.5,
        }
      );

      gsap.to(btn, { y: 0, opacity: 1, height: "72px", duration: 0.5 }); // Slide up button and set height to original
      gsap.to(textBlock, { opacity: 1, duration: 0.5 }); // Fade in text
    }

    function handleMouseLeave() {
      gsap.to(icons, { y: 100, opacity: 0, duration: 0.5 });
      gsap.to(btn, { y: 100, opacity: 1, height: 0, duration: 0.5 }); // Slide down button and set height to 0
      gsap.to(textBlock, { opacity: 0, duration: 0.5 }); // Fade out text
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

    handleMouseEnter();
  }, []);
  return (
    <>
      <div className="container">
        <div className="frostedcard" data-tilt data-tilt-reverse="true">
          <div className="blurbg" data-tilt data-tilt-reverse="true"></div>
          <div className="avatarwrapper" data-tilt data-tilt-reverse="true"></div>

          <div className="icons">
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37eae218ff0b99752dcde_heart.svg"
              className="iconstyle heart"
            />
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37ead47da6caeb10d8e43_coffee.svg"
              className="iconstyle coffee"
            />
            <img
              src="https://uploads-ssl.webflow.com/5fd0f3edc08992febba491a1/5fd37eada350a7820fe59538_at-sign.svg"
              className="iconstyle sign"
            />
          </div>

          <div className="contentwrapper">
            <div className="innercontent">
              <div className="centeredcontent">
                <div className="textwrapper">
                  <h2 className="heading">Glassmorphism</h2>
                  <p className="paragraph">
                    Made with React, TypeScript, GSAP, vanilla-tilt.js, and lots of CSS.  <a href="https://github.com/dafnecaneda/frosted-card" target="_blank">Source code</a><br />
                    By  <a href="https://dafnecaneda.vercel.app/" target="_blank">Dafne Caneda</ a>
                   
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
