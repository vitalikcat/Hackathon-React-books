import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './libraryList.module.css';

import StarReactRating from '../StarRating/StarRating';
import { ReactComponent as LibLogo } from '../../../assets/icons/book.svg';

class LibraryList extends Component {
  render() {
    const {
      books,
      isReadBooks,
      onClickResume,
      onRemoveBookFromList,
      canBeDeleted,
    } = this.props;

    const sortedArrayByRating = books.sort((a, b) => {
      const ratingA = a.rating;
      const ratingB = b.rating;

      if (ratingA < ratingB) {
        return 1;
      } else if (ratingA > ratingB) {
        return -1;
      } else {
        return 0;
      }
    });

    return (
      <ul className={styles.mainBox}>
        {sortedArrayByRating.map(book => (
          <li key={book._id} className={styles.list}>
            <div className={styles.wrapBooks}>
              <LibLogo className={styles[book.status]} />
              <div className={styles[book.status + '_SecondBoxBooks']}>
                <div className={styles.nameBook}>{book.title}</div>
                <div className={styles.authorBook}>{book.author}</div>
                <div className={styles.yearBook}>{book.year}</div>
                <div className={styles.storBook}>{book.pagesCount}</div>
              </div>
              {isReadBooks && (
                <div className={styles.rating}>
                  <StarReactRating rating={book.rating} />
                  <button
                    data-bookid={book._id}
                    className={styles.button}
                    onClick={() => onClickResume(book._id)}
                  >
                    Резюме
                  </button>
                </div>
              )}
              {canBeDeleted && (
                <button
                  className={styles.selectedBookDelete}
                  onClick={() => onRemoveBookFromList(book._id)}
                ></button>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

LibraryList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      pagesCount: PropTypes.number.isRequired,
      comment: PropTypes.string,
      rating: PropTypes.number,
      status: PropTypes.string.isRequired,
    }),
  ),
};

export default LibraryList;
