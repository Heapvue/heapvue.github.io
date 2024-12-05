import { Button } from "./components/button";

export default function Home() {
  return (
    <>
      <div className="container-fluid text-white text-center hero-content">
        <div>
        <h5 className="small-text mb-3">Empowering Tomorrow with Artificial Intelligence</h5>
        <h1 className="display-4 fw-bold mb-4">
        Accelerating growth with <br/><span className="gradient">AI for tomorrow.</span>
        </h1>
        <Button text="Get in Touch" />
        </div>
      </div>

      {/* Background Image */}
      <div className="hero-background">
        <video
          autoPlay
          src="heroVideo.mp4"
          muted
          loop
          id="background-video"
          playsInline
          className="w-100"
        />
        <div className="overlay"></div>
      </div>
    </>
  );
}
