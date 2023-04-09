import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Book.css'

function Book(props) {
  const { name, author, borrower } = props.book;
  const bookDivId = "book-item-" + props.sequence;
  const [expanded, setExpanded] = useState(false);

  const showHideHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <div id={bookDivId} className="block1">
        <span className="sequence">{props.sequence}</span>
        <p className="book">
          {name} <span onClick={showHideHandler}>
            <FontAwesomeIcon icon={expanded && faChevronDown} className="arrow" />
            <FontAwesomeIcon icon={!expanded && faChevronUp} className="arrow" />
          </span>
        </p>
        <p className="author">By {author}</p>
      </div>

      {expanded &&
        <div className="block2">
          {borrower.map((b, index) => (
            <div key={index} className="customer">
              <span style={{ display: 'inline-block', paddingTop: '5px' }}>{b.name}</span>
            </div>
          ))}
        </div>
      }

    </div>
  );
}

export default Book;