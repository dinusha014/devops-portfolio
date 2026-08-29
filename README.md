# 🚀 DevOps & Cloud Infrastructure Control Center Portfolio

A modern, high-performance, interactive portfolio designed specifically for **DevOps, SysAdmin, and Cloud Infrastructure Engineers**. Features a custom terminal-like interactive command interface, real-time visual system health metrics, tech radar scanner animations, and automated deployment architecture.

🌐 **Live Demo:** [https://devops-portfolio-one-sandy.vercel.app](https://devops-portfolio-one-sandy.vercel.app)

---

## 🛠️ Tech Stack & Tooling

| Category | Technologies / Tools Used |
| :--- | :--- |
| **Frontend Framework** | Next.js 14+ (App Router), TypeScript |
| **Styling & Motion** | Tailwind CSS, Custom Keyframe Tech Animations |
| **CI/CD & Hosting** | GitHub Actions, Vercel |
| **DevOps Core Tech Focus** | Docker, Kubernetes, Terraform, AWS, Linux Administration |

---

## 🌟 Key Features

* **Terminal Interaction Engine:** Integrated Web Terminal (`Terminal.tsx`) allowing visitors to interactively execute custom commands (`help`, `about`, `skills`, `projects`, `clear`).
* **Futuristic Tech Motion UI:** Real-time laser radar scanning, floating status badges (`SYS_ONLINE`, `K8S_READY`), and ambient pulse glows.
* **Collaborative Projects Matrix:** Detailed showcases of collaborative software systems with direct GitHub attribution.
* **Automated Pipeline Deployment:** Continuous integration and continuous delivery (CI/CD) setup using GitHub Actions and Vercel triggers.

---

## 📁 Project Architecture & Structure

```text
devops-portfolio/
├── app/
├── components/
│   └── Terminal.tsx      # Web Terminal Interactive Component
├── public/
│   └── profile.png       # Profile Image Asset
├── .gitignore
├── next.config.ts        # Next.js Configurations
├── package.json
└── README.md