import React from "react";
import "./footer.style.css";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Footer = () => {
  return (
    <div className="footer">
      <h2
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        Why print here ?
      </h2>
      <div className="footer_center">
        <div
          className="footer_card"
          style={{
            width: "80%",
          }}
        >
          <h2>Always before time</h2>

          <p>
            We keep our work at highest priority and deliver it at an
            unconditionally pace with guareented best quality.
          </p>
        </div>
        <div className="footer_card">
          <h2>We are Eco-Friendly</h2>

          <p>
            Our Printers works on Green Tech INK Mechanism, that is our
            commitment to provide eco-friendly green Painting domains, We care
            for our green environment.{" "}
          </p>
        </div>
        <div
          className="footer_card"
          style={{
            width: "70%",
          }}
        >
          <h2>Our Commitment </h2>

          <p>
            We are famous because of our clients' satisfaction in our products
            and our commitments made to them .
          </p>
        </div>
        <div className="footer_card">
          <h2>Business ladder </h2>

          <p>
            We have also started from scratch and we understand Bussiness
            Growth. With us, you can completely rely on ‘SilkScreen’ for your
            business advertisement .{" "}
          </p>
        </div>
      </div>
      <hr
        style={{
          width: "95%",
          borderRadius: ".4rem",
          border: "none",
          borderBottom: "solid .4rem white",
        }}
      />

      <div className="footer_center_2 footer_2">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className="footer-address">
              <h3>Reach Us</h3>
              <p>Swing by for a cup of tea, or whatever.</p>
              <br />
              <div style={{ textAlign: "justify" }}>
                <p>
                  <i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>
                  &nbsp; Shankar Towers,First floor-103 <br />
                  &nbsp;&nbsp; Associated Industrial Estate, Balanagar,
                  <br />
                  &nbsp;&nbsp; Hyderabad – 500037, Telengana, IN
                </p>
                <p>
                  <i className="fa fa-phone w3-text-teal w3-xlarge"></i>
                  &nbsp;  +91 7488205050
                </p>
                <p>
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  &nbsp;silkscreenpvt.ltd@gmail.com
                </p>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  <i
                    title="Follow Us"
                    class="fa fa-instagram"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="footer-address">
              <h3>Drop A Note</h3>
              <p>A query or suggestion, or some words of complement.</p>
              <div>
                <form
                  className="w3-container w3-card-4 w3-padding-16 w3-white"
                  action="/action_page.php"
                  target="_blank"
                >
                  <TextField id="complaint-name" label="Name" />
                  <TextField id="complaint-email" label="Email" type="email" />
                  <TextField id="complaint-message" label="Message" multiline={true} />

                  <div style={{ textAlign: "left", marginTop: "10px" }}>
                    <Button variant="contained" color="primary">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
