import React from 'react';
import ajax from "../helpers/Ajax";
import _ from "lodash";

import GetMovieButton from './GetMovieButton';
import Movie from './Movie';

export default class RandomMovie extends React.Component {

  constructor() {
    super();

    this.state = {
      movie: {}
    }
  }

  addMovie() {
    if (_.size(this.state.movie) !== 0) {
      return <Movie movie={this.state.movie} />
    }
  }

  randomMovie() {
    let min = 1,
        max = 25,
        url = `//api.kinopoisk.cf/getTop?type=kp_item_top_best_films_list&listID=1&page=${_.random(min, max)}`;

    ajax.get(url).then(
      res => this.setState({
        movie: JSON.parse(res).items[_.random(1, 20)]
      }),
      error => console.error(JSON.parse(error))
    )
  }

  render() {
    return (
      <div class="layout">
        {this.addMovie()}
        <GetMovieButton onClick={this.randomMovie.bind(this)}/>
      </div>
    );
  }
}
