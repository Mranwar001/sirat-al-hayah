import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-dark text-soft mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-accent">Sirat Al-Hayah</h3>
            <p className="text-secondary text-sm leading-relaxed">
              From Cradle to Jannah - A comprehensive Islamic guide through 
              the journey of life, based on Quran and Sunnah.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/foundation" className="text-secondary hover:text-accent transition">Foundation of Life</Link></li>
              <li><Link to="/youth" className="text-secondary hover:text-accent transition">Youth & Adulthood</Link></li>
              <li><Link to="/marriage" className="text-secondary hover:text-accent transition">Marriage</Link></li>
              <li><Link to="/death" className="text-secondary hover:text-accent transition">Death & Hereafter</Link></li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Connect</h4>
            <p className="text-secondary text-sm mb-2">Founder: Anwar Dahir Yahaya</p>
            <p className="text-secondary text-sm">May Allah bless this effort to spread beneficial knowledge.</p>
            <div className="mt-4 flex space-x-4">
              <span className="text-2xl">📚</span>
              <span className="text-2xl">🕌</span>
              <span className="text-2xl">🤲</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-primary-light mt-8 pt-6 text-center">
          <p className="text-soft-dark text-sm">
            &copy; {currentYear} Sirat Al-Hayah. All rights reserved. 
            <span className="block mt-2 text-xs">
              "And say: My Lord, increase me in knowledge." (20:114)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
