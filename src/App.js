import reviews from "./data";
import Testimonial from "./Components/Testimonial";

const App = () => {
  return (
    <Testimonial reviews={reviews}></Testimonial>
  );
};

export default App;
