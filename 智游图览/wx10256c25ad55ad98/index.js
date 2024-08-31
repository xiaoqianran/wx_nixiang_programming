var e = "https://zz2022.com:8100";

module.exports = {
    onUnloadPage: function() {
        console.log("本接口目前暂时无用");
    },
    getServeUrl: function() {
        return e;
    },
    setServeUrl: function(n) {
        e = n;
    },
    answer: 42
};