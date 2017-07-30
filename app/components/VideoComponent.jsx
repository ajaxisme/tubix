import React from 'react';

export default class VideoComponent extends React.Component {

  // static propTypes = {
  //   id: React.PropTypes.string.isRequired
  // };

  render() {
    const {id, ...htmlTags} = this.props;
    const src = "https://www.youtube.com/embed/" + id + "?autoplay=1";

    return (
      <div className="container-fluid">
        <iframe
          src={src}
          frameBorder='0'
          allowFullScreen
          {...htmlTags}
        />
      </div>

    );
  }
}
