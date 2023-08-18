const heading1 = React.createElement("h1", {
    id: "heading1",
    key: "first"
}, "Namaste Everyone");
const heading2 = React.createElement("h2", {
    id: "heading2",
    key: "second"
}, "Hello sablog");
const conatainer = React.createElement("div", {
    id: "container"
}, [
    heading1,
    heading2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(conatainer);

//# sourceMappingURL=index.6bd02f5a.js.map
