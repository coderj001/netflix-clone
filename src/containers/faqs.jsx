import faqsData from "../fixture/faqs.json";
import { Accordion } from "../components";
import { OptForm } from "../components";

import React from "react";

function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item></Accordion.Item>
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try It Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your account.
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}

export default FaqsContainer;
