import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import pfp from "./assets/me.jpg";
import { useState } from "react";

export default function App() {
  const languages = ["java", "python", "javascript", "typescript", "HTML"]
  const frameworks_libraries = ["spring boot", "react", "node", "express", "fastapi", "tailwind css", "shadcn/ui"]
  const databases_messaging = ["postgresql", "mongodb", "mysql", "kafka", "redis", "s3"]
  const dev_tools = ["git", "docker", "aws", "jira", "postman", "graylog", "grafana", "mixpanel"]
  const skills = ["data structures", "algorithms", "web development", "backend", "microservices", "system design", "frontend"]
  const projects = [
    {
      name: "The new social network",
      description: "A platform to provide an alternative to existing social networking platforms. Having multiple post types like blogs, media posts, notes, polls. Highly event-driven. Still in progress.",
      image: '',
      github: "https://github.com/Aaarish/the-new-social-network",
      live: "",
    },
    {
      name: "The Club Application",
      description: "A platform to create closed groups with invite-only joining process where members can create and track tasks with deadlines.",
      image: `${import.meta.env.BASE_URL}projects/project2.jpg`,
      github: "https://github.com/Aaarish/the-club-application",
      live: "",
    },
    {
      name: "Duostudio",
      description: "A planning platform having two scratchboards with different board types like freestyle, flowchart, text. Needs to add user-data persistence and management.",
      image: `${import.meta.env.BASE_URL}projects/project3.jpg`,
      github: "https://github.com/Aaarish/duostudio",
      live: "https://duostudio-phi.vercel.app/",
    },
    {
      name: "Electronic store",
      description: "E-commerce Backend, Built scalable e-commerce backend application using Java Spring Boot incorporating product catalog and shopping cart functionality.",
      image: `{import.meta.env.BASE_URL}projects/project4.png`,
      github: "https://github.com/Aaarish/electronic-store",
      live: "",
    },
    {
      name: "Blueprint",
      description: "Project Collaboration Platform providing an interface to create and find projects to join or watch, for collaborative learning.",
      image: `{import.meta.env.BASE_URL}projects/project5.png`,
      github: "https://github.com/Aaarish/blueprint-backend",
      live: "https://github.com/Aaarish/blueprint-frontend",
    },
    {
      name: "The Helper",
      description: "A marketplace connecting service providers (electricians, plumbers, carpenters, masons, painters, cleaners) with customers through streamlined profile creation and search functionality.",
      image: `${import.meta.env.BASE_URL}projects/project6.jpg`,
      github: "https://github.com/Aaarish/the-helper",
      live: "",
    },
  ]

  const blogs = [
    {
      title: "The story of Authentication and Authorization",
      description: "All you need to know about authentication and authorization: from first principles...",
      url: "https://medium.com/@aarishm767/the-story-of-authentication-and-authorization-4fc8e402496f",
      image: `${import.meta.env.BASE_URL}blogs/blog1.jpg`,
    },
    {
      title: "Client-Sever Architecture as an inter-process communication over a network",
      description: "All you need to know about client-server architecture: from first principles...",
      url: "https://medium.com/@aarishm767/client-sever-architecture-as-an-inter-process-communication-over-a-network-9d114251dfab",
      image: `${import.meta.env.BASE_URL}blogs/blog2.jpg`,
    },
  ]


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
            <a href="#blogs" className="hover:underline">Blogs</a>
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
              <a onClick={() => setOpen(false)} href="#blogs" className="hover:underline">Blogs</a>
              <a onClick={() => setOpen(false)} href="#contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-linear-to-r from-purple-600 to-purple-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center">
          <img src={pfp} alt="Aarish Mahmood" className="w-56 h-56 rounded-full mb-10" />
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
            I am a Software Engineer with several years of experience designing, testing, and developing software. In-depth understanding of web technologies with focus on delivering innovative business solutions. Excels in fast-paced, high-energy and deadline-driven environment with willingness to take on additional tasks. Always keen to take on challenges.
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
            {
              projects.map(
                (project) => (
                  <Card key={project.name} className="hover:shadow-lg transition">
                    <CardContent className="p-6">
                      <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-t-xl" />
                      <h4 className="text-xl font-semibold">{project.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-3">
                        {project.github ? (
                          <Button size="sm" variant="outline" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                          </Button>
                        ) : (
                          <Button size="sm" variant="outline" disabled>GitHub</Button>
                        )}
                        {project.live ? (
                          <Button size="sm" asChild>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">Live</a>
                          </Button>
                        ) : (
                          <Button size="sm" disabled>Live</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              )
            }
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section id="blogs" className="bg-muted/40 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h3 className="mb-8 text-4xl font-bold text-center">My Blogs</h3>
          <div className="flex flex-col gap-6">
            {blogs.map((blog) => {
              const card = (
                <Card className="hover:shadow-lg transition overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      <div className="shrink-0 sm:w-56 md:w-64">
                        {blog.image ? (
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="h-44 w-full object-cover sm:h-full sm:min-h-44 sm:w-56 md:w-64"
                          />
                        ) : (
                          <div className="flex h-44 w-full items-center justify-center bg-muted text-sm text-muted-foreground sm:min-h-44 sm:w-56 md:w-64">
                            No image
                          </div>
                        )}
                      </div>
                      <div className="flex flex-1 flex-col justify-center p-6">
                        <h4 className="text-xl font-semibold">{blog.title}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {blog.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );

              return blog.url ? (
                <a
                  key={blog.title}
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {card}
                </a>
              ) : (
                <div key={blog.title}>{card}</div>
              );
            })}
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
