import { Link } from "react-router-dom";
import QuoteBlock from "../components/layout/shared/QuoteBlock";

function Home() {
  const sections = [
    { id: "foundation", title: "Foundation", icon: "🏗️", desc: "Understanding our purpose", color: "bg-soft" },
    { id: "childhood", title: "Childhood", icon: "👶", desc: "Nurturing the next generation", color: "bg-soft" },
    { id: "youth", title: "Youth", icon: "🌱", desc: "The prime of life", color: "bg-soft" },
    { id: "marriage", title: "Marriage", icon: "💍", desc: "Half of your faith", color: "bg-soft" },
    { id: "parenting", title: "Parenting", icon: "👪", desc: "Raising righteous children", color: "bg-soft" },
    { id: "character", title: "Character", icon: "⭐", desc: "Emulating the Prophet ﷺ", color: "bg-soft" },
    { id: "death", title: "Death", icon: "🤲", desc: "The ultimate reality", color: "bg-soft" },
  ];
  
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-b from-primary to-primary-light text-soft rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Sirat Al-Hayah
        </h1>
        <p className="text-xl md:text-2xl mb-6 text-accent">
          From Cradle to Jannah
        </p>
        <p className="max-w-2xl mx-auto text-secondary">
          A comprehensive Islamic guide through the journey of life, 
          based on Quran and Sunnah
        </p>
        <div className="mt-8">
          <Link to="/foundation" className="btn-primary inline-block">
            Begin Your Journey
          </Link>
        </div>
      </section>
      
      {/* Quranic Verse */}
      <QuoteBlock 
        text="Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding."
        author="Quran 3:190"
      />
      
      {/* Sections Grid */}
      <section>
        <h2 className="section-title">Life Stages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={`/${section.id}`}
              className={`${section.color} rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1`}
            >
              <div className="text-4xl mb-3">{section.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{section.title}</h3>
              <p className="text-secondary">{section.desc}</p>
              <div className="mt-4 text-accent font-semibold">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <section className="bg-soft rounded-xl p-8 shadow-md">
        <h2 className="section-title">About This Project</h2>
        <p className="text-lg leading-relaxed mb-4 text-secondary">
          Sirat Al-Hayah (The Path of Life) is a spiritual guide designed to help 
          Muslims navigate every stage of life according to Islamic teachings. 
          From the foundation of faith in childhood to preparing for the Hereafter, 
          each section provides Quranic evidence, prophetic guidance, and practical steps.
        </p>
        <p className="text-primary">
          <span className="font-bold">Founder:</span> Anwar Dahir Yahaya
        </p>
        <p className="text-sm text-soft-dark mt-4">
          May Allah accept this effort and make it beneficial for all who read it.
        </p>
      </section>
    </div>
  );
}

export default Home;
