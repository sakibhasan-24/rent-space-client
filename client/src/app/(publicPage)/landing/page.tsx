import Banner from "./Banner";
import CallToAction from "./CallToAction";
import FeatureSection from "./FeatureSection";
import Footer from "./Footer";
import WorkingFlow from "./WorkingFlow";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <FeatureSection />
      <WorkingFlow />
      <CallToAction />
      <Footer />
    </div>
  );
}
