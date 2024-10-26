
const parent = React.createElement("div", { id: "parent" }, React.createElement(
    "div", { id: "child" },
    [React.createElement("h1", {}, "I am children"),
    React.createElement("h1", {}, "I am sibling"),]
));

const heading = React.createElement("h1", {}, "hELLO wORLD FROM rEACT!");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);