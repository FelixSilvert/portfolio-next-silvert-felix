import Header from "./home/header";
import Skills from "./home/skills";
import Projects from "./home/projects";
import Contact from "./home/contact";
import About from "./home/about";

export default function Home() {
  return (
    <div id='top' className={`app`}>
      <Header />

      <main>
        <About/>
        <Projects/>
        <Skills/>
        <Contact/>
      </main>
    </div>
  );
}
