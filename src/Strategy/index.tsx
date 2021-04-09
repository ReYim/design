import "../styles.css";
import { Context, ConcreteStrategyA, ConcreteStrategyB } from "./Strategy";

export default function Strategy() {
  const context = new Context(new ConcreteStrategyA());
  console.log("Client: Strategy is set to normal sorting.");
  context.doSomeBusinessLogic();

  console.log("");

  console.log("Client: Strategy is set to reverse sorting.");
  context.setStrategy(new ConcreteStrategyB());
  context.doSomeBusinessLogic();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
