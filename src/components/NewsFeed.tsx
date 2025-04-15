
import React from 'react';
import Post from './Post';

const DUMMY_POSTS = [
  {
    id: 1,
    author: {
      name: "Frankie Vines",
      title: "Advertising and Marketing",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "Come learn how to supplement your income to enhance your Lifestyle. Join us on a Zoom call.\nYou need to get this information:\nFrankie Vines invited you.\n- Inbox me for zoom id.",
    timeAgo: "1 day ago",
    likes: 45,
    comments: 12,
    reposts: 8
  },
  {
    id: 2,
    author: {
      name: "Frankie Vines",
      title: "Advertising and Marketing",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "It's Vacation Time!!!\nLooking and comparing prices? Search no more...\nBook your trip with me!\nDon't Wait! In box me.",
    timeAgo: "1 day ago",
    likes: 32,
    comments: 8,
    reposts: 5
  }
];

const NewsFeed = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto p-4">
        {DUMMY_POSTS.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
