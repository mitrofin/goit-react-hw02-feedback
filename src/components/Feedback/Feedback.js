import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

export default function FeedbackOptions({ options, leaveFeedback }) {
  return (
    <div className={styles.buttonWrapper}>
      {Object.keys(options).map(key => (
        <button
          key={key}
          type="button"
          className={styles.button}
          id={key}
          onClick={e => leaveFeedback(e)}
        >
          {key.slice(0, 1).toUpperCase() + key.slice(1).toLowerCase()}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};