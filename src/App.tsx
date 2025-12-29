import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import profileImg from "./assets/profile.jpg";
import { useState } from "react";

export default function App() {
  const languages = ["java", "python", "javascript", "typescript", "HTML"]
  const frameworks_libraries = ["spring boot", "react", "node", "express", "fastapi", "tailwind css", "shadcn/ui"]
  const databases_messaging = ["postgresql", "mongodb", "mysql", "kafka", "redis", "s3"]
  const dev_tools = ["git", "docker", "aws", "jira", "postman", "graylog", "grafana", "mixpanel"]
  const skills = ["data structures", "algorithms", "web development", "backend", "frontend"]

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-muted backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8">
          <h1 className="text-2xl font-bold">
            <a href="#">Aarish Mahmood</a>
          </h1>
          <nav className="hidden gap-6 md:flex text-lg font-medium">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>


        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden border-t bg-background">
            <nav className="flex flex-col gap-4 px-4 py-4 text-center">
              <a onClick={() => setOpen(false)} href="#about" className="hover:underline">About</a>
              <a onClick={() => setOpen(false)} href="#skills" className="hover:underline">Skills</a>
              <a onClick={() => setOpen(false)} href="#projects" className="hover:underline">Projects</a>
              <a onClick={() => setOpen(false)} href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-linear-to-r from-purple-600 to-purple-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
          <img src={profileImg} alt="Aarish Mahmood" className="w-56 h-56 rounded-full mb-10" />
          {/* <h2 className="text-4xl font-bold md:text-6xl">Hi, I'm Aarish Mahmood 👋</h2> */}
          <h2 className="text-4xl font-bold md:text-6xl">Hi, I'm Aarish Mahmood</h2>
          <p className="mt-6 max-w-2xl">
            Software Engineer focused on Backend, System Design, and modern Frontend with React & TypeScript.
          </p>
          <div className="mt-8 flex gap-6">
            <Button className="text-xl p-6" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" className="text-xl p-6" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h3 className="mb-6 text-4xl font-bold">About Me</h3>
          <p className="mx-auto max-w-3xl">
            I build scalable backend systems using Java & Spring Boot and modern UIs using React,
            TypeScript, TailwindCSS, and shadcn/ui. I enjoy designing clean architectures and
            performance-oriented systems. I'm a passionate coder and web developer with expertise in creating modern,
            responsive websites and web applications, and a love for solving real-world problems through code.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="mb-8 text-4xl font-bold text-center">My Skills</h3>
          <div className="grid grid-cols-2 gap-1 md:grid-cols-5">
            <div className="border-black border-2 rounded-lg p-2">
              <h4 className="font-bold text-center mb-4">Languages</h4>
              {languages.map(
                (lang) => (
                  <Card key={lang} className="text-center p-2">
                    <CardContent className="font-medium">{lang}</CardContent>
                  </Card>
                )
              )}
            </div>
            <div className="border-black border-2 rounded-lg p-2">
              <h4 className="font-bold text-center mb-4">Frameworks and Libraries</h4>
              {frameworks_libraries.map(
                (frame) => (
                  <Card key={frame} className="text-center p-2">
                    <CardContent className="font-medium">{frame}</CardContent>
                  </Card>
                )
              )}
            </div>
            <div className="border-black border-2 rounded-lg p-2">
              <h4 className="font-bold text-center mb-4">Databases and Messaging</h4>
              {databases_messaging.map(
                (db) => (
                  <Card key={db} className="text-center p-2">
                    <CardContent className="font-medium">{db}</CardContent>
                  </Card>
                )
              )}
            </div>
            <div className="border-black border-2 rounded-lg p-2">
              <h4 className="font-bold text-center mb-4">Development Tools</h4>
              {dev_tools.map(
                (tool) => (
                  <Card key={tool} className="text-center p-2">
                    <CardContent className="font-medium">{tool}</CardContent>
                  </Card>
                )
              )}
            </div>
            <div className="border-black border-2 rounded-lg p-2">
              <h4 className="font-bold text-center mb-4">Others</h4>
              {skills.map(
                (skill) => (
                  <Card key={skill} className="text-center p-2">
                    <CardContent className="font-medium">{skill}</CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="mb-8 text-4xl font-bold text-center">My Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="hover:shadow-lg transition">
                <CardContent className="p-6">
                  <img src={`/projects/project${i}.png`} alt={`Project ${i}`} className="w-full h-40 object-cover rounded-t-xl" />
                  <h4 className="text-xl font-semibold">Project {i}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Short description of the project, the problem it solves, and the tech stack used.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <Button size="sm" variant="outline">GitHub</Button>
                    <Button size="sm">Live</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-linear-to-l from-purple-600 to-purple-200">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="mb-6 text-3xl font-semibold">Contact</h3>
          <div className="flex gap-6">
            <a href="https://github.com/Aaarish" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/aarish-mahmood-0735bb1a9/" target="_blank"><Linkedin /></a>
            <a href="mailto:aarishm767@gmail.com"><Mail /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Aarish Mahmood. All rights reserved.
      </footer>
    </div>
  );
}
