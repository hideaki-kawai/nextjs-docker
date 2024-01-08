import Link from 'next/link';
import blogMock from '@/tests/mocks/blogMock.json';

type Blog = {
  id: number;
  title: string;
};

const fetchBlogs = async (): Promise<Blog[]> => {
  return blogMock;
};

export const BlogListStatic = async () => {
  const blogs = await fetchBlogs();
  return (
    <div className="p-4 ">
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        Blogs
      </p>
      <ul>
        {blogs?.map(blog => (
          <li key={blog.id} className="my-1 text-base">
            <Link prefetch={false} href={`/blogs/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
