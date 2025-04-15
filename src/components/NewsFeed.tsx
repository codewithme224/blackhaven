
import React from 'react';
import Post from './Post';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    reposts: 8,
    shares: 5
  },
  {
    id: 2,
    author: {
      name: "Marcus Johnson",
      title: "Tech Entrepreneur",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "Just launched our new app focused on empowering Black businesses! 🚀 Check it out and let me know your thoughts. Together we rise! 💪🏾",
    timeAgo: "3 hours ago",
    likes: 230,
    comments: 45,
    reposts: 78,
    shares: 28
  },
  {
    id: 3,
    author: {
      name: "Maya Brooks",
      title: "Community Leader",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "Hosting a community meetup this weekend! Topics: Financial literacy, business networking, and tech opportunities. Who's joining? Drop a 🙋🏾‍♂️ below!",
    timeAgo: "5 hours ago",
    likes: 189,
    comments: 67,
    reposts: 34,
    shares: 15
  },
  {
    id: 4,
    author: {
      name: "Dr. James Wilson",
      title: "Education Advocate",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "Just finished another successful mentorship session with our youth. The future is bright! Remember: education is not just about books, it's about building character and confidence. 📚✨",
    timeAgo: "2 days ago",
    likes: 342,
    comments: 89,
    reposts: 156,
    shares: 45
  },
  {
    id: 5,
    author: {
      name: "Tasha Reynolds",
      title: "Small Business Owner",
      avatar: "/lovable-uploads/9ea150a4-fb1c-441e-9159-b22ff9005b25.png"
    },
    content: "Black Business Spotlight! 🌟\nVisit our new store location downtown. Grand opening this Saturday!\nSpecial discounts for community members.\n#SupportBlackBusiness #Community",
    timeAgo: "1 day ago",
    likes: 567,
    comments: 123,
    reposts: 234,
    shares: 89
  }
];

const NewsFeed = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollArea className="h-screen w-full">
        <div className="max-w-2xl mx-auto p-4 space-y-4">
          {DUMMY_POSTS.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default NewsFeed;
