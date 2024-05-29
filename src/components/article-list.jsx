"use client";
import React, { useState } from 'react';
import { ArticleCard } from '@/components/article-card';

const ArticlesList = ({ articles }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filterArticles = (articles, filter) => {
    if (filter === 'little') {
      return articles.filter(article => article.meta.readingTime >= 1 && article.meta.readingTime <= 3);
    }
    if (filter === 'more') {
      return articles.filter(article => article.meta.readingTime >= 4 && article.meta.readingTime <= 10);
    }
    if (filter === 'lot') {
      return articles.filter(article => article.meta.readingTime > 10);
    }
    return articles; // default to 'all'
  };

  const sortedArticles = filterArticles(articles, activeTab).sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

  return (
    <div>
      <div className="flex justify-center mb-4 space-x-8">
        {['all', 'little', 'more', 'lot'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 transition-colors duration-200 focus:outline-none ${
              activeTab === tab
                ? 'border-b-2 border-gray-800 text-black'
                : 'border-b-2 border-transparent text-gray-500 hover:border-gray-800 hover:text-black'
            }`}
          >
            {tab === 'all' ? 'All Words' : tab === 'little' ? 'Little Words' : tab === 'more' ? 'More Words' : 'Most Words'}
          </button>
        ))}
      </div>
      {sortedArticles.map((article) => (
        <div key={article.meta.title} className="mb-6">
          <ArticleCard article={article} />
        </div>
      ))}
    </div>
  );
};


export default ArticlesList;