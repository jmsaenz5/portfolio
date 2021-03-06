import React from "react";

const Bio = () => (
  <div className="content content-main">
    <h2 className="title content">About Me</h2>
    <img
      className="headshot img-fluid"
      src={require("../../assets/images/headshot.jpg")}
      alt="Jason Saenz"
    />
    <p className="copy">
      Jason Saenz is a full-stack web developer with a wide range of skills,
      including JavaScript, React.js, Node.js, and MySQL. He's also fluent in HTML,
      CSS and popular CSS libraries, AJAX and XHR libraries, and MongoDB.
    </p>
    <p className="copy">
      Born and raised in Houston, Texas, Jason did some things and had some
      experiences. After he graduated from high school, he wandered around
      Texas, attending various universities, and working during the summers as a
      river and hiking guide in Alaska. He ultimately graduated from Houston
      Baptist University with a double major in professional writing and mass
      communication.
    </p>
    <p className="copy">
      Even before graduation, Jason began a position as a copy editor for the
      Times-News in Twin Falls, Idaho. After moving back to his hometown, he
      worked as a copywriter for various oil and gas companies’ marketing
      departments. Unsatisfied with his job, Jason decided to move full-time to
      Juneau, Alaska, where he worked for the Boy Scouts of America as a
      district executive of Southeast Alaska. He explored the beautiful islands
      of the region while running the area’s day-to-day operations.
    </p>
    <p className="copy">
      Despite his many adventures in the Last Frontier, Jason missed the mean,
      humid streets of Houston. He returned to Texas and spent the next two
      years teaching high school English. Still unsatisfied, Jason discovered a
      love for coding. And here we are.
    </p>
  </div>
);

export default Bio;
