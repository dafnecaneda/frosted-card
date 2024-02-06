import "./App.css";

function App() {
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
