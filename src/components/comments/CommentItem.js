import React from 'react'

const CommentItem = (props) => (
  <div className="card">
    <div className="card-header d-flex justify-content-between align-items-center" data-testid="user">
      {props.user} 
      <button className="btn btn-link text-danger" data-testid="delete-btn"onClick={props.onClickDelete}><i className="fa fa-times"></i></button>
    </div>
    <div className="card-body">
      <p data-testid="message">{props.message}</p>
    </div>
    <div className="card-footer text-muted" data-testid="created-at">{props.createdAt.toDateString()}</div>
  </div>
);

export default CommentItem;