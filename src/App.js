import "./App.css";
import Button from "./day3/Components/Button";
import { Cricket } from "./day3/Components/Cricket";
import { Dynamicrendering } from "./day3/Components/Dynamicrendering";
function App() {
  return (
    <div className="flex space-x-10 my-8">
      <Button color="green" >Green Button</Button>
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <Dynamicrendering></Dynamicrendering>
      <Cricket></Cricket>
    </div>
  );
}

export default App;