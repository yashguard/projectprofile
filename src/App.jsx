import './App.css';
import User from './User';
import img from './profile-img.jpg'

function App() {
  return (
    <>
      <User name="Yash Guard" title="Full Stack Developer" skills={["HTML","CSS","JQuery","Bootstrap","Wordpress","Javascript","React JS","Node JS"]} img={img} />
    </>
  );
}

export default App;
