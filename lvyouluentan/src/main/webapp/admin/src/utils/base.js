const base = {
    get() {
        return {
            url : "http://localhost:8080/lvyouluentan/",
            name: "lvyouluentan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/lvyouluentan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "旅游论坛"
        } 
    }
}
export default base
