import Welcome from "./Welcome.jsx";
import Services from  "./Services.jsx";
import DateChecker from "./DateChecker.jsx";
import CallToAction from "./CallToAction.jsx";

function Home() {
    return (
      <div className="home">
        <Welcome />
        <Services />
        <DateChecker />
        <CallToAction />
      </div>
    );
  }
  
  export default Home;