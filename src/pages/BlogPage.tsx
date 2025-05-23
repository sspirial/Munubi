import '../styles/base/index.css';
import '../styles/components/index.css';
import '../styles/utilities/index.css';
import { blogPosts, blogCategories } from '../data/blogData';
import type { BlogPost } from '../data/blogData';

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="flex flex-col bg-[#1a1d20] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div 
        className="w-full aspect-[16/9] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.imageUrl})` }}
      />
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-4 text-sm text-[#a2abb3]">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} min read</span>
          <span className="px-2 py-1 rounded-full bg-[#283139] text-primary">
            {post.category}
          </span>
        </div>
        <h2 className="text-xl font-bold text-primary hover:text-white transition-colors">
          {post.title}
        </h2>
        <p className="text-[#a2abb3] line-clamp-3">
          {post.excerpt}
        </p>
        <button className="flex items-center gap-2 text-primary hover:text-white transition-colors mt-2">
          Read More
          <span className="material-icons text-xl">arrow_forward</span>
        </button>
      </div>
    </article>
  );
};

const BlogPage = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Blog</h1>
        <p className="text-[#a2abb3] text-lg">
          Thoughts, tutorials and insights about web development, design, and technology.
        </p>
      </div>

      {/* Categories */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {blogCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap 
              ${category === 'All' 
                ? 'bg-primary text-background' 
                : 'bg-[#283139] text-primary hover:bg-secondary'} 
              transition-colors`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Newsletter Subscription */}
      <div className="mt-16 p-8 bg-[#1a1d20] rounded-xl">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Subscribe to my newsletter
          </h3>
          <p className="text-[#a2abb3] mb-6">
            Get the latest articles and insights delivered directly to your inbox.
          </p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-[#283139] border border-border text-primary placeholder-[#a2abb3] focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-primary text-background font-bold hover:bg-white transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
