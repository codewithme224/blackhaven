
import React, { useState } from 'react';
import { MessageSquare, Share, Repeat, MoreVertical } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
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
    comments: Array<{
      id: number;
      author: {
        name: string;
        avatar: string;
      };
      content: string;
      timeAgo: string;
    }>;
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
  const [showComments, setShowComments] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    if (liked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
      toast({
        title: "Post liked! ✊🏾",
        duration: 1500
      });
    }
    setLiked(!liked);
  };

  const handleRepost = () => {
    if (reposted) {
      setRepostsCount(prev => prev - 1);
    } else {
      setRepostsCount(prev => prev + 1);
      toast({
        title: "Post reposted! 🔄",
        duration: 1500
      });
    }
    setReposted(!reposted);
  };

  const handleComment = () => {
    if (comment.trim()) {
      console.log('Comment submitted:', comment);
      toast({
        title: "Comment posted! 💭",
        duration: 1500
      });
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
        <span className="transition-all duration-200">{likesCount} likes</span>
        <span>{post.comments?.length || 0} comments</span>
        <span className="transition-all duration-200">{repostsCount} reposts</span>
        <span>{post.shares} shares</span>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-accent">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-2 transition-all duration-200 ${
            liked ? 'text-[#4A2B0F] scale-110' : 'text-muted'
          } hover:text-[#4A2B0F] hover:scale-105`}
        >
          <span className="text-2xl">✊🏾</span>
          <span className="text-sm">Like</span>
        </button>

        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <MessageSquare size={20} />
          <span className="text-sm">Comment</span>
        </button>

        <button 
          onClick={handleRepost}
          className={`flex items-center gap-2 transition-all duration-200 ${
            reposted ? 'text-green-500 scale-110' : 'text-muted'
          } hover:text-green-500 hover:scale-105`}
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

      {showComments && (
        <div className="mt-4 border-t border-accent pt-4 space-y-4">
          {post.comments?.map((comment) => (
            <div key={comment.id} className="flex gap-3">
              <img
                src={comment.author.avatar}
                alt={comment.author.name}
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1 bg-muted p-3 rounded-lg">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-sm">{comment.author.name}</span>
                  <span className="text-xs text-muted-foreground">{comment.timeAgo}</span>
                </div>
                <p className="text-sm mt-1">{comment.content}</p>
              </div>
            </div>
          ))}
          
          <div className="flex items-center gap-2 mt-4">
            <img
              src={post.author.avatar}
              alt="Your avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 flex gap-2">
              <Textarea
                placeholder="Write a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[40px] flex-1"
              />
              <Button 
                onClick={handleComment}
                disabled={!comment.trim()}
                size="sm"
                className="transition-all duration-200 hover:scale-105"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
