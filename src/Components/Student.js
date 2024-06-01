import React from "react";
import "../Assets/Css/Style.css";

const Student = (props) => {
  return (
    <div className="stud">
      <h1>Name:{props.name}</h1>
      <h1>Dept:{props.dept}</h1>
      <h1>Hoppy:{props.hoppy}</h1>
    </div>
  );
};
export default Student;
