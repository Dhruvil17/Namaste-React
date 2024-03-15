/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h3 tag</h1>
 *          <h2>I am h4 tag</h2>
 *      </div>
 * </div>
 *
 */

const heading = React.createElement(
    "h1",
    { style: { color: "red" } },
    "Hello World from React!"
);

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }),
//     [
//         React.createElement("h1", {}, "I am h1 Tag"),
//         React.createElement("h2", {}, "I am h2 Tag"),
//     ],
//     React.createElement("div", { id: "child2" }),
//     [
//         React.createElement("h3", {}, "I am h3 Tag"),
//         React.createElement("h4", {}, "I am h4 Tag"),
//     ],
// ]);

//console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
