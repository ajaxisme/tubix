import React from 'react';

export default class SearchComponent extends React.Component {
  render() {
    return (
      <form>
        <div className="container input-group">
          <input id="searchtext" type="text" className="form-control" name="email" placeholder="Artist/Songs" />
          <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
        </div>
      </form>
    )
  }
}
