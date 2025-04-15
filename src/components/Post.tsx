
import React, { useState } from 'react';
import { MessageSquare, Share, Repeat, ThumbsUp, MoreVertical } from 'lucide-react';

interface PostProps {
  post: {
    id: number;
    author: {
      name: string;
      title: string;
      avatar: string;
    };
    content: string;
    timeAgo: string;
    likes: number;
    comments: number;
    reposts: number;
  };
}

const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleRepost = () => {
    setReposted(!reposted);
  };

  return (
    <div className="bg-secondary rounded-lg p-4 mb-4">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="text-foreground font-semibold">{post.author.name}</h3>
            <p className="text-muted text-sm">{post.author.title}</p>
            <p className="text-muted text-xs">{post.timeAgo}</p>
          </div>
        </div>
        <button className="text-muted hover:text-foreground">
          <MoreVertical size={20} />
        </button>
      </div>
      
      <div className="mb-4">
        <p className="text-foreground whitespace-pre-line">{post.content}</p>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-accent">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-2 ${liked ? 'text-blue-500' : 'text-muted'} hover:text-blue-500 transition-colors`}
        >
          <ThumbsUp size={20} />
          <span className="text-sm">Like</span>
        </button>

        <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
          <MessageSquare size={20} />
          <span className="text-sm">Comment</span>
        </button>

        <button 
          onClick={handleRepost}
          className={`flex items-center gap-2 ${reposted ? 'text-green-500' : 'text-muted'} hover:text-green-500 transition-colors`}
        >
          <Repeat size={20} />
          <span className="text-sm">Repost</span>
        </button>

        <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
          <Share size={20} />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
