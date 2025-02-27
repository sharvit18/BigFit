import React from "react";
import Accordion from 'react-bootstrap/Accordion';

function FAQ() {
  return (
    <section id="questions" class="p-5">
      <div class="container">
        <h2 class="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion id="questions" flush className="custom-accordion">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="arrow">What is the purpose of this app?</Accordion.Header>
            <Accordion.Body>
              BigFit mission is designed to help busy moms achieve their weight loss goals by tracking their daily calorie intake and exercise routine.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is this application free to use?</Accordion.Header>
            <Accordion.Body>
              Yes, the app is completely free to use as of now because it is in its beta testing phase.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I track my calorie intake and exercise routine on the BigFit app?</Accordion.Header>
            <Accordion.Body>
              Absolutely! BigFit has a built-in tracking feature that allows you to log your daily meals and workouts. You can record your own calorie and fitness achievements, and the app also provide you with workout video-recommendations to help you stay on track.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I use BigFit on my mobile device?</Accordion.Header>
            <Accordion.Body>
              Yes, BigFit is designed to work seamlessly on both desktop and mobile devices. Simply access the web app from your smartphone or tablet browser.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>How can I get support if I have a problem with BigFit?</Accordion.Header>
            <Accordion.Body>
              If you have any issues or questions about using BigFit, our customer support team is always here to help. You can contact us via email at support@Bigfit.com. We strive to respond to all inquiries within 24 hours.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>How does the Epley 1Rep Max formula work?</Accordion.Header>
            <Accordion.Body>
              The Epley 1 Rep Max formula
              estimates how much the weight lifter could have lifted one time
              (RM) based on the maximum number of reps (r) of a lesser weight
              (w). This method is used in some competitions and in many gyms to
              avoid injuries and to provide a more consistent measure of
              endurance and strength. The Epley Formula for one repetition max
              is as follows: 1RM = w*(1 + r/30){" "}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;