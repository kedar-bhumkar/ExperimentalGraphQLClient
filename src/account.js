import React from "react";

const Account = ({ account }) => {
  return (
    <article className="card">
      <header className="card-header">
        <p>{account.Id}</p>
        <h2>{account.name}</h2>
      </header>

      <div className="card-author">
        <a className="author-avatar" href="#">
          <img src="images/author.jpg" />
        </a>
        <svg className="half-circle" viewBox="0 0 106 57">
          <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
        </svg>

        <div className="author-name">
          <div className="author-name-prefix">Id</div>
          {account.id}
        </div>
      </div>
      <div className="tags">
        <a href="#">Hot</a>
        <a href="#">Cold</a>
      </div>
    </article>
  );
};

export default Account;
