import React from "react";

export default function Footer() {
  var curryear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p> Copyright @ {curryear}</p>
      </footer>
    </div>
  );
}
