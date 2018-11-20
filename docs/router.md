# Router

Angular路由处理流程，当接收到一个URL之后：

1. 执行重定向（如果存在）
2. 识别`router state`（树形结构）
3. 执行`guards`和`resolve`数据
4. 激活所有涉及到的组件
5. 管理导航

## Reference

- [Angular Router](https://vsavkin.com/angular-2-router-d9e30599f9ea)
