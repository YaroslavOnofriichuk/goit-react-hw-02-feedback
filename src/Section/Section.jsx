import StyledSection from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <StyledSection>
            <p>{title}</p>
            {children}
        </StyledSection>
    );
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element,
};

export default Section;
