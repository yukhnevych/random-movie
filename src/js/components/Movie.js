import React from 'react';
import Poster from './Poster';

export default class Movie extends React.Component {
  constructor() {
    super();
  }

  getPoster() {
    let poster = this.props.movie.posterURL.replace('iphone_', 'iphone360_');

    return `<img class="media-object" src="https://st.kinopoisk.ru/images/${poster}" />`
  }

  render() {
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">{this.props.movie.nameRU}</h3>
        </div>
        <div class="panel-body">
          <div class="media">
            <div class="media-left">
              <a href="#">
                <Poster url={this.props.movie.posterURL}/>
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">{this.props.movie.nameRU}</h4>
              <p>{this.props.movie.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
