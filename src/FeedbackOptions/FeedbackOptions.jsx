import StyledFeedbackOptions from './FeedbackOptions.Styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <StyledFeedbackOptions>
            {options.map(option => (
                <li key={option}>
                    <button type="button" onClick={onLeaveFeedback}>
                        {option}
                    </button>
                </li>
            ))}
        </StyledFeedbackOptions>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
    options: PropTypes.array,
};

export default FeedbackOptions;
