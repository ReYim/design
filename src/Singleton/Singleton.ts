/**
 * Singleton类定义了 “getInstance” 方法，该方法允许客户端访问唯一的单例实例
 */
export class Singleton {
  private static instance: Singleton;

  /**
   * Singleton的构造函数应始终是私有的，以防止使用new运算符直接进行构造调用
   * 将默认构造函数设为私有， 防止其他对象使用单例类的 new 运算符
   */
  private constructor() {}

  /**
   * 此实现可以对Singleton类进行子类化，同时在每个子类中仅保留一个实例。
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public someBusinessLogic() {
    // ...
  }
}
