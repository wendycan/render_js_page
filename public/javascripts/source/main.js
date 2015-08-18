window.addEventListener('load', function () {
  React.render(<Message name="Wendy" />, document.getElementById('content'));
});

var Message = React.createClass({
  render: function() {
    return <div className="container">
      <h1>Content generated by React</h1>
      <p>Hello, {this.props.name}</p>
    </div>;
  }
});
