import React from "react";

export default class GetMovieButton extends React.Component {

  constructor() {
    super();
  }

  onClick(e) {
    e.preventDefault();

    this.props.onClick();
  }

  render() {
    return (
      <a href="#" class="btn btn-lg btn-success get-movie-button" onClick={this.onClick.bind(this)}>Get Movie</a>
    );
  }
}
