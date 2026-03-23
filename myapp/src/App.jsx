import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ResumeList from "./components/ResumeList";
import { EDUCATION, EXPERIENCE, SKILLS } from "./data/resume";

function App() {
  return (
    <div>
      <Header />
      <section className="resume_intro_section">
        <h1>Utkarsh Gupta</h1>
        <p>
          A passionate frontend developer with experience in building responsive
          web applications using React and other modern technologies.
        </p>
      </section>
      <ResumeList title="Skills" list={SKILLS} />
      <ResumeList title="Experience" list={EXPERIENCE} />
      <ResumeList title="Education" list={EDUCATION} />
      <Footer />
    </div>
  );
}

export default App;
