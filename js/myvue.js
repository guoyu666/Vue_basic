// 定义一个Vue类
class Vue {
    // 定义给构造函数
    // options是一个简单的纯粹的JS对象：{}
    // options对象中有一个data配置项
    constructor(options) {
        // 获取所有的属性名
        Object.keys(options.data).forEach((propertyName, index) => {
            // console.log(typeof propertyName, propertyName, index)
            let firstChar = propertyName.charAt(0)
            if (firstChar !== '_' && firstChar !== '$') {
                Object.defineProperty(this, propertyName, {
                    get() {
                        return options.data[propertyName];
                    },
                    set(val) {
                        return options.data[propertyName] = val;
                    }

                })
            }
        })
    }
}