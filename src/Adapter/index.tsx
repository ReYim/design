import "../styles.css";
import { Target, Adaptee, Adapter } from "./Adapter";

export default function AdapterMode() {
  /**
   * The client code supports all classes that follow the Target interface.
   */
  function clientCode(target: Target) {
    console.log(target.request());
  }

  console.log("Client: I can work just fine with the Target objects:");
  const target = new Target();
  clientCode(target);

  console.log("");

  const adaptee = new Adaptee();
  console.log(
    "Client: The Adaptee class has a weird interface. See, I don't understand it:"
  );
  console.log(`Adaptee: ${adaptee.specificRequest()}`);

  console.log("");

  console.log("Client: But I can work with it via the Adapter:");
  const adapter = new Adapter(adaptee);
  clientCode(adapter);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
