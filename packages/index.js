// 组件库的入口
// 按需加载
export * from "./components/index.js";
// 全局注册
import components from "./components.js";

// 全局安装
const install = function (app) {
    // 检查是否已安装，如果未定义则初始化为false
    if (install.installed) return;

    components.forEach(component => {
        app.use(component);
    });

    // 标记为已安装
    install.installed = true;
};

// 初始化installed属性
install.installed = false;

export default install;
