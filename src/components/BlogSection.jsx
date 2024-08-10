/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { articles } from "../data";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import Button from "./Button";

// eslint-disable-next-line no-unused-vars
const ArticleCard = ({ articles, onClick, isActive, isMobile }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer sm:mb-5 p-5 max-w-xl relative sm:text-left text-center ${
        isMobile ? "text-quaternary" : ""
      }`}
    >
      <h3
        className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${
          isActive || isMobile ? "text-quaternary" : "text-slate-600"
        }`}
      >
        {articles.publicTitle}
      </h3>
      <p
        className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${
          isActive || isMobile ? "text-white" : "text-slate-600"
        }`}
      >
        {articles.author} | {articles.date} | {articles.tags.map((tag, index) => (
          <li
          key={`article-tag-${index}`}>{tag}</li>
        ))}
      </p>
      {(isActive || isMobile) && (
        <div className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-tertiary my-6 sm:block hidden"></div>
      )}
    </div>
  );
};

const ArticleContent = ({ article }) => {
  return (
    <div className="max-w-7xl mt-5 space-y-8 border-4 lg:border-8 rounded-xl lg:rounded-3xl">
      <ul className="max-w-7xl list-none my-6 p-4">
        <li className="text-xl lg:text-2xl xl:text-3xl font-bold ">{article.title}</li>
        {article.content.map((detail, index) => (
          <li
            key={`experience-detail-${index}`}
            className="text-slate-500 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px] my-6"
            dangerouslySetInnerHTML={{ __html: detail }}
          />
        ))}
        <li className="my-6">
        <Button 
          as="a"
          href={`/`}
          className="bg-[#17A398] hover:bg-[#0F6B63] text-white font-bold py-2 px-4 border-b-4 border-[#144769] hover:border-[#185982] rounded-full w-32 h-full mt-4">
            Read More...
          </Button>
        </li>
      </ul>
    </div>
  );
};

const Blog = () => {
  const [selectedJob, setSelectedJob] = useState(articles[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sm:my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Captain&apos;s Log
        </h2>
      </motion.div>

      <div className="relative mt-10 md:mt-20 md:p-10 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="flex flex-col z-10 sm:w-auto sm:w-full">
          {articles.map((article, index) => (
            <ArticleCard
              key={`article-${index}`}
              articles={article}
              onClick={() => setSelectedJob(article)}
              isActive={selectedJob === article}
              isMobile={isMobile}
            />
          ))}
        </div>

        <div className="flex justify-end z-10 sm:block hidden">
          <ArticleContent article={selectedJob} />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Blog, "portfolio");
