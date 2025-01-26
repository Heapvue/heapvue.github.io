import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonSecondry } from "../components/button";
import { CiCalendarDate } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import {
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { getAllPosts } from "@/lib/blog";
import { Metadata } from 'next'

const BlogHome = () => {
  const posts = getAllPosts();
  
  // Sort posts by date in descending order (newest first)
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  // Get recent posts from sorted array
  const recentPosts = sortedPosts.slice(0, 3);

  const categories = [
    {
      name: "Technology",
      icon: "bi-cpu",
      description: "Latest tech trends and innovations",
    },
    {
      name: "Cloud Computing",
      icon: "bi-cloud",
      description: "Cloud solutions and strategies",
    },
    {
      name: "Development",
      icon: "bi-code-square",
      description: "Programming and development insights",
    },
    {
      name: "Design",
      icon: "bi-palette",
      description: "UX/UI and design principles",
    },
  ];

  return (
    <div className="container-fluid p-3 p-lg-5 blog">
      <div className="row">
        <div className="col-md-8">
          <h2>
            Insights for the <br />
            Digital Age
          </h2>
        </div>
      </div>
      <div className="row mt-5 text-start rightSide">
        <div className="col-md-8">
          {sortedPosts.map((post, index) => (
            <div className="blogCard" key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                <h1>{post.title}</h1>
              </Link>
              <div className="d-flex align-items-center details">
                <div className="d-flex align-items-center me-3 me-md-5">
                  <CiCalendarDate className="icon me-2" />
                  <p className="mb-0">{post.date}</p>
                </div>
                <div className="d-flex align-items-center me-3 me-md-5">
                  <LuUserRound className="icon me-2" />
                  <p className="mb-0">{post.author}</p>
                </div>
                <div className="d-flex align-items-center me-3 me-md-5">
                  <IoPricetagsOutline className="icon me-2" />
                  <p className="mb-0">{post.category}</p>
                </div>
                <div className="d-flex align-items-center">
                  <IoTimeOutline className="icon me-2" />
                  <p className="mb-0">{post.readTime}</p>
                </div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="mt-3 custom-image"
                  priority={index === 0}
                />
              </Link>

              <div className="mt-3 bottomDetails">
                <p className="card-text">{post.excerpt}</p>
                <div className="d-flex mt-3 justify-content-between align-items-center share">
                  <div className="d-flex align-items-center">
                    <PiShareFat className="me-3 icon" />
                    <FaFacebookF className="me-2 icon" />
                    <FaXTwitter className="me-2 icon" />
                    <FaLinkedin className="me-2 icon" />
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <ButtonSecondry text="Continue Reading" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 ps-lg-5 pe-lg-5">
          {/* Search Bar */}
          <form className="d-flex mb-4" role="search">
            <input
              className="form-control me-2 rounded-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <ButtonSecondry text="Search" />
          </form>

          {/* Recent Posts */}
          <div className="mt-5">
            <h4 className="fw-bold mb-5">Recent Posts</h4>
            {recentPosts.map((post) => (
              <div key={post.slug} className="d-flex mb-3">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={100}
                  height={80}
                  className="me-3 latest-image-container"
                />
                <div>
                  <small className="text-muted">{post.date}</small>
                  <Link href={`/blog/${post.slug}`} className="text-decoration-none">
                    <p className="mb-0 fw-semibold text-dark">
                      {post.title.length > 50
                        ? post.title.substring(0, 50) + "..."
                        : post.title}
                    </p>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-5">
            <h4 className="fw-bold mb-5">Categories</h4>
            <ul className="list-unstyled">
              {categories.map((category, index) => (
                <React.Fragment key={category.name}>
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-dark">
                      {category.name}
                    </a>
                  </li>
                  {index < categories.length - 1 && <hr />}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;

export const metadata = {
  title: 'Heapvue Blog | AI & Technology Insights and Updates',
  description: 'Stay informed with the latest insights on AI, technology trends, and digital innovation. Expert articles, industry updates, and tech knowledge sharing.',
  keywords: 'tech blog, AI insights, technology trends, digital innovation, tech news, industry updates',
  openGraph: {
    title: 'Heapvue Blog | AI & Technology Insights and Updates',
    description: 'Stay informed with the latest insights on AI, technology trends, and digital innovation. Expert articles, industry updates, and tech knowledge sharing.',
    images: '/images/blog.jpg',
  }
};
