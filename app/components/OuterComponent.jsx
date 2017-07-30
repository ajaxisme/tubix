import React from 'react';

import SearchComponent from './SearchComponent.jsx';
import VideoComponent from './VideoComponent.jsx';
import youtube_logo from '../../images/youtube.png';
import azlyrics_logo from '../../images/azlyrics.gif';

var data = [
  {
    "artist": "Eminem",
    "title": "Lose Yourself",
    "youtube_id": "_Yhyp-_hX2s",
    "lyrics": "http://www.azlyrics.com/lyrics/eminem/loseyourself.html"
  },
  {
    "artist": "Eminem",
    "title": "Rap God",
    "youtube_id": "XbGs_qK2PQA",
    "lyrics": "http://www.azlyrics.com/lyrics/eminem/rapgod.html"
  },
  {
    "artist": "Eminem",
    "title": "Love the Way You Lie",
    "youtube_id": "uelHwf8o7_U",
    "lyrics": "http://www.azlyrics.com/lyrics/eminem/lovethewayyoulie.html"
  },
  {
    "artist": "Luis Fonsi",
    "title": "Despacito Remix",
    "youtube_id": "72UO0v5ESUo",
    "lyrics": "http://www.azlyrics.com/lyrics/luisfonsi/despacitoremix.html"
  },
  {
    "artist": "Luis Fonsi",
    "title": "Despacito",
    "youtube_id": "kJQP7kiw5Fk",
    "lyrics": "http://www.azlyrics.com/lyrics/luisfonsi/despacito.html"
  },
  {
    "artist": "Chainsmokers",
    "title": "Closer",
    "youtube_id": "PT2_F-1esPk",
    "lyrics": "http://www.azlyrics.com/lyrics/chainsmokers/closer.html"
  }
];

export default class OuterComponent extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      current: 3,
      current_lyrics: 'dummy'
    };
  }

  fetchLyrics () {
    let lyrics_url = 'http://localhost:5000/getLyrics?url=' + data[this.state.current].lyrics;
    fetch(lyrics_url)
      .then(response => {
        return response;
      })
      .then(response => {
        return response.json();
      })
      .then(data => {
          this.setState({
            current_lyrics: data.lyrics
          });
      });
  }

  componentDidMount() {
    this.fetchLyrics();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.current !== this.state.current) {
      this.fetchLyrics()
    }
  }

  goToVideo (index) {
    let current = index;
    if(current < 0) {
      current = data.length - 1;
    } else if (current >= data.length) {
      current = 0;
    }



    this.setState({
      current
    });


  }

  render() {

    const id = data[this.state.current].youtube_id;
    const title = data[this.state.current].title;
    const artist = data[this.state.current].artist;

    return(
      <div className="container-fluid">
        <div className="row">
          <SearchComponent />
        </div>
        <hr />
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-2">
            <button className="btn btn-lg" onClick={this.goToVideo.bind(this, this.state.current - 1)}>
              <span className="glyphicon glyphicon-backward"></span>
            </button>
          </div>
          <div className="col-md-2">
            <button className="btn btn-lg" onClick={this.goToVideo.bind(this, this.state.current + 1)}>
              <span className="glyphicon glyphicon-forward"></span>
            </button>
          </div>
          <div className="col-md-4"></div>
        </div>

        <div className="row center-block">
          <div className="col-sm-7 jumbotron">
            <div className="row">
              <div className="col-md-8">
                <h3>{title} - {artist}</h3>
              </div>
              <div className="col-md-4 text-right">
                <label>Powered By</label><img src={youtube_logo} width="100" height="75" />
              </div>

            </div>
            <VideoComponent id={id} width="800" height="600" />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4 jumbotron">
            <div><img src={azlyrics_logo} width="100" height="25" /></div>
            {this.state.current_lyrics}
            {/* Lyrics component */}
          </div>
        </div>
      </div>
    );
  }
}
