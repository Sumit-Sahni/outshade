import Hero from "./Screens/HeroComp/Hero"
import StoryOfTutor from "./Screens/StoryOfTutor/StoryOfTutor"
import Trained from "./Screens/Trained/Trained"
import WhyTutorMaster from "./Screens/WhyTutorMaster/WhyTutorMaster"
import StayConnected from "./Screens/StayConected/StayConnected"
import TrainingVideo from "./Screens/TrainingOverview/TrainingVideo"
import WhoWillTrainYou from "./Screens/WhoWillTrainYou/WhoWillTrainYou"
import Footer from "./Screens/Footer/Footer"

function App() {
  return (
       <div>
          <Hero/>
          <StoryOfTutor/>
          <Trained/>
          <WhyTutorMaster/>
          <StayConnected/>
          {/* <TrainingVideo/>
          <WhoWillTrainYou/>
          <Footer/> */}
       </div>
  );
}

export default App;
