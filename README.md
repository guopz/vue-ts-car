
<!-- ### [点击前往](https://segmentfault.com/a/1190000018964794) -->

#### TypeScript

1. TypeScript是一种由微软开发的自由和开源的编程语言，2012年10月推出首个公开版本。
2. TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。
3. 主流的框架都集成了TypeScript。

---

#### 基础类型
布尔值（Boolean）
>let demo: boolean = false;

数字（Number) `支持十进制，十六进制，二进制，八进制`
> let demo: number = 6;

字符串（String）
> let demo: string = "bob";

数组（Array）
>let demo: number[] = [1, 2, 3];
>let demo: Array< number> = [1, 2, 3];

 - 元组(针对元组类型允许表示一个已知`元素数量`和`类型`的数组)
 >let x: [string, number] = ['Xcat Liu', 25];

枚举
   - 具有自增的特性
   - 反向映射（数字枚举）
   
> enum Color {Red, Green, Blue}
> let demo:Color = Color.Red;

Any
> let demo: any = 4;
> demo = '你好'
> demo = false
> 
> let list: any[] = [1, true, "free"];

Void
- 和Any相反，表示没有任何类型
- 多数用于函数

> function demo(): void {
     console.log("This is my warning message");
}
let d:void = undefined;

类型断言
- 类似-类型转换
- 两种写法

>let someValue: any = "this is a string";
let strLength: number = (< string>someValue).length;
let strLength: number = (someValue as string).length;

---
#### 接口
声明一个可约束`对象`
```
interface type {
    key: number,
    label?: string,
    readonly age: number,
    [propName: string]: any,
    (source: string, subString: string): boolean
}
```


#### 函数
```
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
```
----
#### 插件 
> 1. vue-class-component
>2. vue-property-decorator
在 vue-class-component 上增强更多的结合 Vue 特性的装饰器
>3. vuex-class
基于vue-class-component对Vuex提供的装饰器
