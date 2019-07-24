console.log("App is working!!");

// const template = <h1>Hello world!!</h1>;

const template = React.createElement("h1", null, "Hello world!!");


ReactDOM.render(template, document.getElementById("App"));