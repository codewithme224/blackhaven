
import React, { useState } from 'react';
import { MessageSquare, Share, Repeat, ThumbsUp, MoreVertical } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
    shares: number;
  };
}

const Post = ({ post }: PostProps) => {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [repostsCount, setRepostsCount] = useState(post.reposts);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  const handleRepost = () => {
    if (reposted) {
      setRepostsCount(prev => prev - 1);
    } else {
      setRepostsCount(prev => prev + 1);
    }
    setReposted(!reposted);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // In a real app, this would send the comment to an API
      console.log('Comment submitted:', comment);
      setComment('');
    }
  };

  return (
    <div className="bg-secondary rounded-lg p-4">
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

      <div className="flex items-center justify-between text-sm text-muted mb-3">
        <span>{likesCount} likes</span>
        <span>{post.comments} comments</span>
        <span>{repostsCount} reposts</span>
        <span>{post.shares} shares</span>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-accent">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-2 ${liked ? 'text-blue-500' : 'text-muted'} hover:text-blue-500 transition-colors`}
        >
          <ThumbsUp size={20} />
          <span className="text-sm">Like</span>
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <MessageSquare size={20} />
              <span className="text-sm">Comment</span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Add Comment</SheetTitle>
              <SheetDescription>
                Write your comment below
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-4">
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your comment..."
                className="min-h-[100px]"
              />
              <Button onClick={handleComment}>Post Comment</Button>
            </div>
          </SheetContent>
        </Sheet>

        <button 
          onClick={handleRepost}
          className={`flex items-center gap-2 ${reposted ? 'text-green-500' : 'text-muted'} hover:text-green-500 transition-colors`}
        >
          <Repeat size={20} />
          <span className="text-sm">Repost</span>
        </button>

        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
              <Share size={20} />
              <span className="text-sm">Share</span>
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                Copy Link
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Share via Message
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                Share to Profile
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Post;
