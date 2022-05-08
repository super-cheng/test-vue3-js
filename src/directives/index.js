export default {
  install: (app, options) => {
    app.config.globalProperties.$hello = "hello world";

    app.directive("focus", {
      mounted(el,binding) {
        console.log('自定义指令mounted：',binding);
        el.focus();
      },
    });
  },
};
