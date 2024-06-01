// import Banner from "./Puppy/Banner";
// import Footer from "./Puppy/Footer";
// import Header from "./Puppy/Header";
// import Puppy1 from "./Puppy/Puppy1";
// import PuppyList from "./Puppy/PuppyList";
import Student from "./Components/Student";
import Employee from "./Components/Employee";

function App() {
  return (
    <div className="app">
      <Student name="Abebe" dept="CoSc" hoppy="Dev" />
      <Student name="Andualem" dept="CENG" hoppy="Dev" />
      <Student name="Abel" dept="EENG" hoppy="Dev" />
      <Employee name="{Andualem}" salary={452} />
    </div>
  );
}

export default App;
