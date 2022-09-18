import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageUrl?"https://www.nccpimandtip.gov.eg/uploads/newsImages/1549208279-default-news.png":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <span className="badge rounded-pill text-bg-danger">{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small>By {!author?'Unknown':author} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem