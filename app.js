/* <div id="parent">
        <div id="child">
            <h1>Hello I'm heading 1</h1>
            <h2>Hello I'm heading 2</h2>
        </div>
        <div id="child2">
            <h1>Hello I'm heading 1</h1>
            <h2>Hello I'm heading 2</h2>
        </div>
    </div>
*/

const nestedStructure = React.createElement(
    'div', 
    { id: 'parent'},
    [ 
        React.createElement( 'div', { id: 'child'}, [
                React.createElement('h1', {}, "Hello I'm heading 1"), 
                React.createElement('h2', {}, "Hello I'm heading 2")
            ]
        ), 
        React.createElement( 'div', { id: 'child2'}, [
                React.createElement('h1', {}, "Hello I'm heading 1"), 
                React.createElement('h2', {}, "Hello I'm heading 2")
            ]
        )
    ]
)


const heading = React.createElement("h1", { id: "head"}, "Hello World React!" ); // create Element takes 3 arguments
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedStructure);
