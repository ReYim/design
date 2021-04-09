import "../styles.css";
import { Singleton } from "./Singleton";

export default function SingletonMode() {
  function clientCode() {
    /** 新建一个静态构建方法作为构造函数。 该函数会 “偷偷” 调用私有构造函数来创建对象
     *  并将其保存在一个静态成员变量中。 此后所有对于该函数的调用都将返回这一缓存对象 */
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
      console.log("Singleton works, both variables contain the same instance.");
    } else {
      console.log("Singleton failed, variables contain different instances.");
    }
  }

  clientCode();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
