import "./App.css";
import Button from "./day3/Components/Button";
import { Cricket } from "./day3/Components/Cricket";
import { Dynamicrendering } from "./day3/Components/Dynamicrendering";
import { Goku } from "./day3/Components/Goku";
import Toggle from "./day3/Components/Toggle";
function App() {
  return (
    <div className="flex space-x-10 my-8">
      <Button color="green" >Green Button</Button>
      <Button color="red">Red Button</Button>
      <Button color="yellow">Yellow Button</Button>
      <Button color="blue">Blue Button</Button>
      <Dynamicrendering></Dynamicrendering>
      <Cricket></Cricket>
      <Goku></Goku>
      <Toggle></Toggle>
    </div>
  );
}

export default App;