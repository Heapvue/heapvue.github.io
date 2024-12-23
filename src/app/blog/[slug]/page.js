import { getPostBySlug, getAllPosts } from "@/lib/blog";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { compileMDX } from "next-mdx-remote/rsc";
import { ButtonSecondry } from "@/app/components/button";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: true },
  });

  return (
    <div className="blog-post-page">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Hero Section */}
            <div className="mb-5">
              <Image
                src={post.frontmatter.image}
                alt={post.frontmatter.title}
                className="img-fluid rounded-4 mb-4"
                width={800}
                height={400}
                priority
              />
              <h1 className="display-4 fw-bold mb-4">
                {post.frontmatter.title}
              </h1>

              {/* Meta Information */}
              <div className="d-flex flex-wrap gap-4 mb-4">
                <div className="d-flex align-items-center">
                  <CiCalendarDate className="me-2" />
                  <span>{post.frontmatter.date}</span>
                </div>
                <div className="d-flex align-items-center">
                  <LuUserRound className="me-2" />
                  <span>{post.frontmatter.author}</span>
                </div>
                <div className="d-flex align-items-center">
                  <IoPricetagsOutline className="me-2" />
                  <span>{post.frontmatter.category}</span>
                </div>
                <div className="d-flex align-items-center">
                  <IoTimeOutline className="me-2" />
                  <span>{post.frontmatter.readTime}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <article className="blog-content prose prose-lg">{content}</article>

            {/* Navigation */}
            <Link href="/blog">
              <ButtonSecondry text="← Back to Blog" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
