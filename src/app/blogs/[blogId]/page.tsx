import blogMock from '@/tests/mocks/blogMock.json';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';

type Blog = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

type PageProps = {
  params: {
    blogId: number;
  };
};

const fetchBlog = async (blogId: number): Promise<Blog> => {
  return blogMock[blogId - 1];
};

export default async function BlogDetailPage({ params }: PageProps) {
  const blog = await fetchBlog(params.blogId);
  if (!blog) return notFound();
  return (
    <div className="mt-16 p-8">
      <p>
        <strong className="mr-3">Task ID:</strong> {blog.id}
      </p>
      <p>
        <strong className="mr-3">Title:</strong> {blog.title}
      </p>
      <p>
        <strong className="mr-3">Content:</strong> {blog.content}
      </p>
      <p>
        <strong className="mr-3">Created at:</strong>
        {blog && format(new Date(blog.created_at), 'yyyy-MM-dd HH:mm:ss')}
      </p>
      <Link href={`/blogs`}>
        <ArrowUturnLeftIcon className="mt-3 h-6 w-6 cursor-pointer text-blue-500" />
      </Link>
    </div>
  );
}

// 個別ページのHTMLを事前に生成するメソッド
export async function generateStaticParams() {
  const blogs: Blog[] = blogMock;

  return blogs.map(blog => ({
    blogId: blog.id.toString(),
  }));
}
