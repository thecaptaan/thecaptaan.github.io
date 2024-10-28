import InvestmentCard from "../components/InvestmentCard";
import OfferingCard from "../components/OfferingCard";
import investmentData from "../data/Investment";
import Captaan from "../assets/images/captaan.jpg";
import Office from "../assets/images/office.jpg";
import BusinessPie from "../assets/images/business.svg";
import "./styles/Index.css";
import FAQComponent from "../components/FAQ";
export default function Index() {
  const offeringData = [
    {
      image: "/images/technical.jpg",
      title: "Technical Co-Founder",
      description:
        "We provide technical co-founder services to startups and entrepreneurs who are looking for a technical partner to build their product.",
      offering__position: "Technical Co-Founder",
    },
    {
      image: "/images/investment.jpg",
      title: "Investment",
      description:
        "We provide investment opportunities to startups and entrepreneurs who are looking for investment opportunities.",
      offering__position: "Stake Holder",
    },
    {
      image: "/images/mentorship.jpg",
      title: "Mentorship",
      description:
        "We provide mentorship to startups and entrepreneurs who are looking for mentorship opportunities.",
      offering__position: "Mentorship",
    },
  ];
  return (
    <>
      <div className="banner__container">
        <img
          className="banner__img"
          src={Office}
          alt="Office & Table and chairs"
        />
        <div className="banner__images cent">
          <div className="banner__item row">
            <div className="invest__text__container cent">
              <div className="invest__text">I Invest</div>
            </div>
            <div className="where__invest cent">
              <span className="startup">STARTUP</span>
            </div>
          </div>
        </div>
      </div>
      <div className="about col cent">
        <div className="about__item col cent">
          <div className="about__heading">
            <h1>
              <span className="theCaptaan">THE CAPTAAN</span> ABOUT
            </h1>
          </div>
          <div className="about__content row">
            <div className="about__content__item col cent">
              <p className="about__description">
                I started my journey as a developer, diving into the tech world
                and mastering how to build solutions from the ground up. Now, as
                the founder of Xorblin Digital Pvt. Ltd. and an investor, I’ve
                shifted focus to a broader vision—helping businesses scale and
                succeed through smart, tech-driven solutions. My experience on
                the development side gives me a unique perspective on
                innovation, allowing me to spot potential in new ventures and
                guide Xorblin toward real impact. For me, it’s all about
                combining hands-on tech knowledge with strategic business
                insight to make a difference.
              </p>
            </div>
            <div className="about__content__item cent">
              <img src={Captaan} alt="" className="about__img" />
            </div>
          </div>
        </div>
      </div>
      <div className="investment col cent">
        <div className="investment__heading">
          <h1>
            <span className="theCaptaan">THE CAPTAAN</span> INVESTMENT
          </h1>
        </div>
        <div className="investment__card__container row">
          {investmentData.map((investment, index) => {
            return <InvestmentCard key={index} {...investment} />;
          })}
        </div>
      </div>
      <div className="offering col cent">
        <div className="offering__heading cent">
          <h1>
            <span className="theCaptaan">THE CAPTAAN</span> OFFERINGS
          </h1>
        </div>
        <div className="offering__card__container row">
          {offeringData.map((offering, index) => {
            return <OfferingCard key={index} {...offering} />;
          })}
        </div>
      </div>
      <div className="work cent">
        <div className="work__item row">
          <div className="work__text">
            <h1 className="work__heading">
              Ready To Work, <span className="cursive">let&apos;s connect</span>
            </h1>
            <div>
              <p className="work__text__description">
                Whether you’re a startup looking for investment, a founder
                seeking mentorship, or a business in need of tech expertise, I’m
                here to help. Let’s work together to bring your vision to life.
              </p>
            </div>
          </div>
          <div className="work__img__container cent">
            <img src={BusinessPie} className="work__img" alt="" />
          </div>
        </div>
      </div>
      <FAQComponent />
    </>
  );
}
