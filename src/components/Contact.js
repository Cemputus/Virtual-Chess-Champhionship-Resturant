import React from "react";

const Contact = () => {
  return (
    <>
      <section class="contact" id="contact">
        <h1 class="heading">
          <span>contact</span> us
        </h1>
        <div class="row">
          <iframe
            class="map"
            src="https://www.google.com/maps/dir/0.3079514,32.5712095/9P5X%2BWF9+KFC+Mukono,+Mukono/@0.3396112,32.4951164,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x177dc721659a1185:0x2d553df8a51ccab1!2m2!1d32.7486691!2d0.3598184?entry=ttu"
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <form action="">
            <h3>get in touch</h3>
            <div class="inputBox">
              <span class="fas fa-user"></span>
              <input type="text" placeholder="name" />
            </div>
            <div class="inputBox">
              <span class="fas fa-envelope"></span>
              <input type="email" placeholder="email" />
            </div>
            <div class="inputBox">
              <span class="fas fa-phone"></span>
              <input type="number" placeholder="number" />
            </div>
            <input type="submit" value="contact now" class="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
