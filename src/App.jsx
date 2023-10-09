import { Profile } from "./components/Profile";
import circleTop from "./images/bg-pattern-top.svg";
import cicleBot from "./images/bg-pattern-bottom.svg";

function App() {
  return (
    <>
      <div className="min-h-screen w-full relative flex items-center justify-center p-6 bg-DarkCyan overflow-hidden">
        <img
          src={circleTop}
          alt="circletop"
          className="absolute top-[-160px] left-[-180px]  sm:top-[-450px] sm:left-[-320px]"
        />
        <img
          src={cicleBot}
          alt=""
          className="absolute bottom-[-90px] right-[-160px]  sm:bottom-[-600px] sm:right-[-250px] md:bottom-[-550px] md:right-[-200px]"
        />
        <Profile />
      </div>
    </>
  );
}

export default App;
