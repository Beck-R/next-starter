import Layout from "../components/layout/layout";
import Hero from "../components/hero/Hero";
import SectionBreak from "../components/sectionBreak/SectionBreak";
import Card from "../components/card/Card";
import ContactForm from "../components/contactform/ContactForm";

export default function Home() {
  return (
    <Layout>
      <Hero
        heading="Hello, I'm Beckham"
        subHeading="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        buttonText="Learn More"
        bgImage="/happycat.jpg"
      />
      <SectionBreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project1.jpeg"
          alt="Project image"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dignissim dui, in mollis ante tristique sed."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project1.jpeg"
          alt="Project image"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dignissim dui, in mollis ante tristique sed."
          buttonText="Learn More"
          buttonLink=""
        />
        <Card
          image="/project1.jpeg"
          alt="Project image"
          title="Cool Project"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper dignissim dui, in mollis ante tristique sed."
          buttonText="Learn More"
          buttonLink=""
        />
      </div>
      <SectionBreak />
      <h2>Contact</h2>
      <ContactForm />
    </Layout>
  );
}
