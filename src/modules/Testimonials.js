import React from "react";
import { cardtext } from "../const/Cardtext";
import Card from "../components/Card";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-container">
        {cardtext.map((card, index) => {
          return <Card key={index} props={card} />;
        })}
      </div>
    </section>
  );
}

export default Testimonials;
