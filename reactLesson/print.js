//simplest way to print name
function Welcome(props) {
  return <h1>Hello, {props.name} </h1>;
}

//react
/*
We call ReactDOM.render() with the <Welcome name="Sara" /> element.
React calls the Welcome component with {name: 'Sara'} as the props.
Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>
*/
class Welcome extends React.Component{
  render(){
    return <h1>Hello, {this.props.name} </h1>;
  }
}

const element = <Welcome name ="david" />;
ReactDOM.render{
  element,
  document.getElementById('root')
};

//work on muitlple names
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
