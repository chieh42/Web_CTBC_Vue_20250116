console.log('Hello World!');

// 建立 Vue 應用程式
const app = Vue.createApp({
    // 資料區域
    data() {
        // 資料物件
        return {
            // 第一個文字: 值
            firstText: 'Hello Vue!',
            textColor: 'gold',
            fontSize: 30,
            // 判斷式 canBuy = true加入購物車 false商品已售完
            canBuy: true,
            // 定義陣列資料[資料,資料,資料]
            web: [
                'HTML','CSS','JavaScript','Vue','jQuery','React','Angular','Git'
            ],
            count: 0
        }
    },
    // 方法區域(函式)
    methods: {
        // 方法名稱(){}
        test() {
            console.log('不要再點了');
        },
        methonEvent(e) {
            console.log(e);
            console.log(e.target);
            console.log(e.x, e.y);
        }
    }
});

// 將app變數安裝到#app元素
app.mount('#app');