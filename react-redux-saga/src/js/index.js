import store from "./redux/store/index";
import { addArticle } from "./redux/actions/index";

window.store = store;
window.addArticle = addArticle;

store.getState();
console.log("-");
store.subscribe(() => console.log("Look ma, Redux!!"));
console.log("--");
store.dispatch(
  addArticle({ title: "React Redux Tutorial for Beginners", id: 1 })
);
store.dispatch(addArticle({ title: "Dispathing", id: 2 }));
console.log("---");
store.getState();
console.log("----");
