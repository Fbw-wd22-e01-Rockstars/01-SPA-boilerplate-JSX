import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM


let name ="James";
let age = 12;
// WHAT: This variable returns contains the html to render
let output = (
	<span>
		{name} is {age} years old
	</span>
);

// WHERE: A DOM element that will contain the entire react generated html
const container = document.getElementById('root');

// create a root
const root = ReactDOM.createRoot(container);

//render app to root
root.render(output);




