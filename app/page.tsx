import Terminal from "./components/Terminal";
import Image from "next/image";
import profileImg from "@/public/profile.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white p-6 font-sans">
      {/* Top Status Bar */}
      <header className="flex justify-between items-center border-b border-gray-800 pb-4 mb-10 max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 bg-green-500 rounded-full animate-ping"></span>
          <span className="text-sm font-mono text-gray-300">SYSTEM STATUS: OPERATIONAL</span>
        </div>
        <div className="text-xs font-mono text-gray-500">REGION: US-EAST-1 | UPTIME: 99.99%</div>
      </header>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto my-12">
        {/* Profile Image Card */}
        <div className="flex justify-center">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-green-500/30 bg-gradient-to-b from-gray-800 to-black p-2 shadow-2xl shadow-green-500/10">
            <Image
              src={profileImg}
              alt="Chamod Dinusha"
              fill
              sizes="(max-width: 768px) 100vw, 256px"
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="md:col-span-1">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            DevOps & Cloud <br />
            <span className="text-green-400">Infrastructure Engineer</span>
          </h1>
          <p className="text-gray-400 mb-6 text-sm leading-relaxed">
            Automating deployments, building resilient cloud systems, and scaling Kubernetes clusters with 99.99% uptime.
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-md font-semibold text-sm transition">
              View Architecture
            </a>
            <a href="#contact" className="border border-gray-700 hover:border-gray-500 px-4 py-2 rounded-md font-semibold text-sm text-gray-300 transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Live Web Terminal */}
        <div className="w-full">
          <Terminal />
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-6xl mx-auto my-16">
        <h2 className="text-xl font-bold font-mono mb-6 border-b border-gray-800 pb-2 text-green-400">
          // ABOUT_SYSADMIN
        </h2>
        <div className="bg-gray-900/40 border border-gray-800 p-6 md:p-8 rounded-lg hover:border-green-500/30 transition">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I am a passionate <span className="text-green-400 font-semibold">DevOps & Cloud Infrastructure Engineer</span> dedicated to designing, automating, and maintaining highly available cloud systems. With a strong foundation in Linux administration, containerization, and modern CI/CD practices, I bridge the gap between development and operations to accelerate software delivery.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
            My technical journey involves deploying infrastructure as code using <span className="text-gray-200 font-mono text-xs bg-gray-800 px-2 py-1 rounded">Terraform</span>, orchestrating container workloads with <span className="text-gray-200 font-mono text-xs bg-gray-800 px-2 py-1 rounded">Docker & Kubernetes</span>, and implementing robust monitoring systems to ensure operational reliability. I thrive in collaborative team environments and enjoy solving complex system bottlenecks.
          </p>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-800/80">
            <div>
              <span className="text-xs font-mono text-gray-500 block">CORE FOCUS</span>
              <span className="text-sm font-semibold text-gray-200">Cloud Automation & IaC</span>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 block">WORKFLOW</span>
              <span className="text-sm font-semibold text-gray-200">GitOps & Microservices</span>
            </div>
            <div>
              <span className="text-xs font-mono text-gray-500 block">LOCATION / METHOD</span>
              <span className="text-sm font-semibold text-gray-200">Sri Lanka (Remote / Hybrid)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto my-16">
        <h2 className="text-xl font-bold font-mono mb-6 border-b border-gray-800 pb-2 text-green-400">
          // TECH_STACK & TOOLING
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: "Cloud Platforms", tools: "AWS, Azure, GCP" },
            { title: "Containers & K8s", tools: "Docker, Kubernetes, Helm" },
            { title: "IaC & Automation", tools: "Terraform, Ansible" },
            { title: "CI/CD Pipelines", tools: "GitHub Actions, Jenkins" },
          ].map((skill, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 p-4 rounded-lg hover:border-green-500/40 transition">
              <h3 className="text-xs font-mono text-gray-400 mb-1">{skill.title}</h3>
              <p className="font-semibold text-gray-200 text-sm">{skill.tools}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects / Architecture */}
      <section id="projects" className="max-w-6xl mx-auto my-16">
        <h2 className="text-xl font-bold font-mono mb-6 border-b border-gray-800 pb-2 text-green-400">
          // FEATURED_INFRASTRUCTURE_PROJECTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Project 1: TaskFlow Task Management System */}
          <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-lg hover:border-green-500/30 transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">Task Management & Team Collaboration</span>
                <span className="text-xs font-mono text-gray-500">Collaborative</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">TaskFlow Task Management System</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                A collaborative task management system engineered to streamline workflows and improve productivity. Built system features, managed Git branching models, and deployment workflows as a team.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-gray-400 block mb-1">Collaborators:</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <a href="https://github.com/dinusha014" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@dinusha014</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/Rashini25" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@Rashini25</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/nisanganethra" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@nisanganethra</a>
                </div>
              </div>
              <a
                href="https://github.com/dinusha014/TaskFlow-Task-Management-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-xs font-mono block"
              >
                [ GitHub Repository ]
              </a>
            </div>
          </div>

          {/* Project 2: Sri Lankan Fake News Detection */}
          <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-lg hover:border-green-500/30 transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">ML & Team Collaboration</span>
                <span className="text-xs font-mono text-gray-500">Collaborative</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">Sri Lankan Fake News Detection</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                A collaborative machine learning project focused on detecting fake news in the Sri Lankan context. Managed version control, pipeline structuring, and collaborative workflows.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-gray-400 block mb-1">Collaborators:</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <a href="https://github.com/dinusha014" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@dinusha014</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/Rashini25" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@Rashini25</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/nisanganethra" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@nisanganethra</a>
                </div>
              </div>
              <a
                href="https://github.com/dinusha014/Sri-Lankan-Fake-News-Detection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-xs font-mono block"
              >
                [ GitHub Repository ]
              </a>
            </div>
          </div>

          {/* Project 3: EventSphere */}
          <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-lg hover:border-green-500/30 transition flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">Team Collaboration</span>
                <span className="text-xs font-mono text-gray-500">Collaborative</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">EventSphere</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                A collaborative event management platform built as a team. Engineered system architecture, version control workflows, and deployment integrations.
              </p>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono text-gray-400 block mb-1">Collaborators:</span>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <a href="https://github.com/dinusha014" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@dinusha014</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/Rashini25" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@Rashini25</a>
                  <span className="text-gray-600">|</span>
                  <a href="https://github.com/nisanganethra" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@nisanganethra</a>
                </div>
              </div>
              <a
                href="https://github.com/dinusha014/EventSphere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-xs font-mono block"
              >
                [ GitHub Repository ]
              </a>
            </div>
          </div>

          {/* Project 4: Tourism Microbusiness Assistant */}
          <div className="bg-gray-900/40 border border-gray-800 p-6 rounded-lg hover:border-green-500/30 transition flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">AI Agent & API Integration</span>
              <h3 className="text-lg font-bold mt-3 mb-2">Sri Lanka Tourism Microbusiness Assistant</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Engineered an AI-driven assistant designed to empower local tourism microbusinesses in Sri Lanka with automated customer interaction, workflow integration, and scalable deployment.
              </p>
            </div>
            <div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 mb-4">
                <span>#AI_Agent</span> <span>#Python</span> <span>#API_Orchestration</span>
              </div>
              <a
                href="https://github.com/dinusha014/SriLanka-Tourism-Microbusiness-Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:underline text-xs font-mono"
              >
                [ GitHub Repository ]
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto my-16 text-center border-t border-gray-800 pt-10">
        <h2 className="text-2xl font-bold mb-3">Get In Touch</h2>
        <p className="text-gray-400 text-sm mb-6">Open for DevOps, SysAdmin, and Cloud Engineering opportunities.</p>
        <a href="mailto:chamoddinusha176@gmail.com" className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-md font-bold text-sm transition inline-block">
          Send System Message (Email)
        </a>
      </section>
    </main>
  );
}