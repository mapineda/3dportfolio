import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogPreview = ({ article }) => (
  <div className="mt-5">
    <Link to={`/blog/${article.slug}`} className="block">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-xl" />
      <div className="max-w-7xl list-none space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl p-6 mt-4">
        <p
          className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
          dangerouslySetInnerHTML={{ __html: article.content.substring(0, 200) + '...' }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {article.tags.map((tag, index) => (
          <span key={index} className="bg-tertiary text-white px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  </div>
);

BlogPreview.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired
};

export default BlogPreview;