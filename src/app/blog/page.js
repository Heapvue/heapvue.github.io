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

const BlogHome = () => {
  const featuredPosts = [
    {
      id: 1,
      title:
        "How to Detect and Respond to the Surge in Cloud-Based Token Theft",
      excerpt:
        "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive. Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.",
      category: "Technology",
      image: "/services.jpg",
      date: "Mar 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      title:
        "Tips for Efficient Knowledge Management Using Enterprise Search Software",
      excerpt:
        "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.",
      category: "Cloud",
      image: "/service1.jpg",
      date: "Mar 12, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      title:
        "5 Reasons Why a GSA Replacement Has More Advantages Than the Original",
      excerpt:
        "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Wayfarers biodiesel helvetica yr meh. Whatever brunch vice mlkshk hashtag affogato messenger bag activated charcoal glossier godard fingerstache dreamcatcher.",
      category: "IoT",
      image: "/service2.jpg",
      date: "Mar 10, 2024",
      readTime: "6 min read",
    },
  ];

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
            Insight's for the <br />
            Digital Age
          </h2>
        </div>
      </div>
      <div className="row mt-5 text-start rightSide">
        <div className="col-md-8">
          {featuredPosts.map((post) => (
            <div className="blogCard" key={post.id}>
              <h1>{post.title}</h1>
              <div className="d-flex align-items-center details">
                <div className="d-flex align-items-center me-3 me-md-5">
                  <CiCalendarDate className="icon me-2" />
                  <p className="mb-0"> {post.date} </p>
                </div>
                <div className="d-flex align-items-center me-3 me-md-5">
                  <LuUserRound className="icon me-2" />
                  <p className="mb-0">Akhil</p>
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
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={600}
                className="mt-3 custom-image"
              />

              <div className="mt-3 bottomDetails">
                <p className="card-text">{post.excerpt}</p>
                <div className="d-flex mt-3 justify-content-between align-items-center share">
                  <div className="d-flex align-items-center">
                    <PiShareFat className="me-3 icon" />
                    <FaFacebookF className="me-2 icon" />
                    <FaXTwitter className="me-2 icon" />
                    <FaLinkedin className="me-2 icon" />
                  </div>
                  <ButtonSecondry text="Continue Reading"></ButtonSecondry>
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
            <div className="d-flex mb-3">
              <Image
                src="/services.jpg"
                alt="services"
                width={100}
                height={80}
                className="me-3 latest-image-container"
              />
              <div>
                <small className="text-muted">MARCH 30, 2022</small>
                <p className="mb-0 fw-semibold">
                  How to Detect and Respond to the Surge in Cloud-Based...
                </p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <Image
                src="/service1.jpg"
                alt="services"
                width={100}
                height={80}
                className="me-3 latest-image-container"
              />
              <div>
                <small className="text-muted">MARCH 30, 2022</small>
                <p className="mb-0 fw-semibold">
                  Tips for Efficient Knowledge Management Using Enterpri...
                </p>
              </div>
            </div>

            <div className="d-flex mb-3">
              <Image
                src="/service2.jpg"
                alt="services"
                width={100}
                height={80}
                className="me-3 latest-image-container"
              />
              <div>
                <small className="text-muted">MARCH 20, 2022</small>
                <p className="mb-0 fw-semibold">
                  Why Digital Literacy is Essential for Your 21st Centur...
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-5">
            <h4 className="fw-bold mb-5">Categories</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  IT
                </a>
              </li>
              <hr/>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Networks
                </a>
              </li>
              <hr/>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Protection
                </a>
              </li>
              <hr/>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Security
                </a>
              </li>
              <hr/>
              <li className="mb-2">
                <a href="#" className="text-decoration-none text-dark">
                  Solutions
                </a>
              </li>
              <hr/>
              <li>
                <a href="#" className="text-decoration-none text-dark">
                  Websites
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
