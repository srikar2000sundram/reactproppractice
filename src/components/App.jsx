import React from "react";
import Card from "./card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Akash Mishra"
        img="images/jatin.jpg"
        phn="+91 9123231952"
        E-mail="AkashMishra@Gmail.com"
      />
    </div>
  );
}

export default App;
