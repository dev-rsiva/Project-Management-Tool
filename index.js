const heading = React.createElement("h1", {}, "hello world");

const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);

root.render(heading);
