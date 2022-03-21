const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function hellosham(props) {
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <h1>Hello Sham</h1>
        <p>WELCOME TO YOUR FIRST PAGE</p>
      </Container>
    </div>
  );
}

module.exports = hellosham;