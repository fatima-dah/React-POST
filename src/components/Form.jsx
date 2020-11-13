import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
    this.onChangeNameFilm = this.onChangeNameFilm.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
  }

  onChangeNameFilm = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeUrl = (e) => {
    this.setState({ poster: e.target.value });
  };
  onChangeComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitForm = (e) => {
    e.preventDefault();
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`Title #${res} has been successfully added !`);
        }
      })
      .catch((e) => {
        console.error(e);
        alert('There was an error when adding the title');
      });
  };
  

  render() {
    return (
      <div className="Formulaire">
        <form onSubmit={this.submitForm}>
          <h1>Favourite Film</h1>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="nameFilm">Title :</label>
              <input
                type="text"
                id="nameFilm"
                name="nameFilm"
                onChange={this.onChangeNameFilm}
                value={this.state.title}
              />
            </div>
            <div className="form-data">
              <label htmlFor="url">Poster :</label>
              <input
                type="text"
                id="url"
                name="url"
                onChange={this.onChangeUrl}
                value={this.state.poster}
              />
            </div>
            <div className="form-data">
              <label htmlFor="comment"> Comment:</label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                cols="60"
                onChange={this.onChangeComment}
                value={this.state.comment}
              ></textarea>
            </div>
            <div className="form-data">
              <input type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default Form;
