import React from 'react';

export default class Poster extends React.Component {
  constructor() {
    super();
  }

  getPoster() {
    let poster = this.props.url.replace('iphone_', 'iphone360_');

    return `//st.kinopoisk.ru/images/${poster}`
  }

  render() {
    return (
      <img class="media-object" src={this.getPoster.call(this)} />
    );
  }
}
