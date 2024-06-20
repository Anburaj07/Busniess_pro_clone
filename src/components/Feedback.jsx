import React from "react";
import sandra from "../images/sandra.png";
import bernard from "../images/bernard.png";
import joyce from "../images/joyce.png";
import trustpilot from "../images/trustpilot.webp";
import paypal from "../images/paypal.png";

const testimonials = [
  {
    img: sandra,
    rating: 5,
    feedback:
      "They delivered a website that not only looks great but also functions flawlessly. Their expertise and dedication made our online presence stand out and boosted our business. Highly recommended!",
    name: "Sandra C.",
    title: "Co-Founder at DigitalRFX",
    logo: trustpilot,
  },
  {
    img: bernard,
    rating: 5,
    feedback:
      "Our experience working with the Make Lots team was exceptional. They transformed our outdated website into a visually stunning and user-friendly platform that perfectly represents our brand. Their creativity attention to detail, and seamless communication made the entire process a breeze. We couldn’t be happier with the results!",
    name: "Bernard Renfro",
    title: "Manager at OBCR LLC",
    logo: null,
  },
  {
    img: joyce,
    rating: 5,
    feedback:
      "Within just three months of launching my new website, I’ve seen a significant increase in leads and sales compared to the two years with my old design. Prioritizing an effective user experience has been a game-changer for my business.",
    name: "Joyce M.",
    title: "Founder/CEO at WLJ",
    logo: paypal,
  },
];

const Rating = ({ rating }) => (
  <p className="font-bold text-2xl pb-4">{`⭐️`.repeat(rating)}</p>
);

const TestimonialCard = ({ img, rating, feedback, name, title, logo, ind }) => (
  <div className="w-[32%]">
    <div className="rounded-full w-[30%] m-auto">
      <img src={img} alt={name} />
    </div>
    <div
      className={`bg-[#efefef] pt-14 p-3 -mt-8 text-center ${
        ind == "true" && "shadow-custom leading-loose "
      } `}
    >
      <Rating rating={rating} />
      <p className="text-[#727272] leading-relaxed">{feedback}</p>
      <div className="mt-8">
        <h1 className="font-semibold text-2xl text-[#ea9016]">{name}</h1>
        <p>{title}</p>
      </div>
    </div>
    {logo && (
      <div className="w-[60%] m-auto mt-2">
        <img src={logo} alt={`${name}'s logo`} />
      </div>
    )}
  </div>
);

const Feedback = () => {
  return (
    <div className="p-8">
      <div>
        <h1 className="font-semibold text-center text-4xl text-[#203548]">
          What Our Clients Are Saying
        </h1>
        <p className="w-[20%] mt-2 m-auto border-b-4 border-[#203548]"></p>
      </div>
      <div className="w-[66%] m-auto mt-16 flex justify-between">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            {...testimonial}
            ind={index == 1 && "true"}
          />
        ))}
      </div>
    </div>
  );
};

export default Feedback;
