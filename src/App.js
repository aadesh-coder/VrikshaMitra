import React from "react";

function App() {
  return (
    <div className="container">
      <div style={{ textAlign: "center", marginTop: "7%", marginBottom: "7%"}}>
        <h1 className="mb-4">Lorem Ipsum is simply dummy text</h1>
        <p>
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <img
                width="100%"
                alt="image"
                src="https://media.istockphoto.com/photos/woman-hand-picking-up-garbage-plastic-for-cleaning-at-river-with-picture-id1158162342?b=1&k=20&m=1158162342&s=170667a&w=0&h=Yty9slzrJ0fv_0FpZhfSHfP7p64z_g6jgiZMCJcEHUs="
              />
            </div>
            <div className="col-6">
              <img
                width="100%"
                alt="image"
                src="https://media.istockphoto.com/photos/woman-hand-picking-up-garbage-plastic-for-cleaning-at-river-with-picture-id1158162342?b=1&k=20&m=1158162342&s=170667a&w=0&h=Yty9slzrJ0fv_0FpZhfSHfP7p64z_g6jgiZMCJcEHUs="
              />
            </div>
            <div className="col-6 mt-4">
              <img
                width="100%"
                alt="image"
                src="https://media.istockphoto.com/photos/woman-hand-picking-up-garbage-plastic-for-cleaning-at-river-with-picture-id1158162342?b=1&k=20&m=1158162342&s=170667a&w=0&h=Yty9slzrJ0fv_0FpZhfSHfP7p64z_g6jgiZMCJcEHUs="
              />
            </div>
            <div className="col-6 mt-4">
              <img
                width="100%"
                alt="image"
                src="https://media.istockphoto.com/photos/woman-hand-picking-up-garbage-plastic-for-cleaning-at-river-with-picture-id1158162342?b=1&k=20&m=1158162342&s=170667a&w=0&h=Yty9slzrJ0fv_0FpZhfSHfP7p64z_g6jgiZMCJcEHUs="
              />
            </div>
          </div>
        </div>
        <div className="col-4">
        <img
                width="100%"
                height="87.5%"
                alt="image"
                src="https://c8.alamy.com/comp/2BH4W3J/sunny-white-scenic-norwegian-powerful-river-cascade-waterfall-with-dark-rocks-and-bright-blue-sky-nature-travel-clean-falling-water-vertical-landscap-2BH4W3J.jpg"
              />
        </div>
      </div>
      <div style={{textAlign:"right",marginBottom:"5%"}}>
        <h5>See More</h5>
      </div>
    </div>
  );
}

export default App;
