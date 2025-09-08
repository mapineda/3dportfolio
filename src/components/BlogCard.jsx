import PropTypes from 'prop-types';

const BlogCard = ({ title, author, date, onClick, isActive, isMobile }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
      isMobile ? "text-quaternary" : ""
    }`}
  >
    {(isActive || isMobile) && (
      <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
    )}
    <h3
      className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
        isActive || isMobile ? "text-quaternary" : "text-slate-600"
      }`}
    >
      {title}
    </h3>
    <p
      className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
        isActive || isMobile ? "text-white" : "text-slate-600"
      }`}
    >
      {author} | {date}
    </p>
  </div>
);

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
};

export default BlogCard;