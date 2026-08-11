# Portfolio Website (First Project)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![AWS S3](https://img.shields.io/badge/AWS_S3-232F3E?style=flat&logo=amazonaws&logoColor=white)
![Status](https://img.shields.io/badge/status-inactive-lightgrey)

A single-page portfolio website for a freelance graphic designer, built with HTML, CSS, and JavaScript and deployed to the cloud using **Amazon S3 Static Website Hosting**. Developed collaboratively as part of our team's first AWS cloud project.

> **Note:** The live site has been temporarily taken down as the free-tier AWS hosting period has ended. All project files are available in this repository.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Tools Required](#tools-required)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [File Description](#file-description)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Challenges Faced](#challenges-faced)
- [Future Improvements](#future-improvements)
- [Learning Outcomes](#learning-outcomes)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

---

## Getting Started

The project runs on a single branch: `main`

- `main` contains the complete and final version of the site

### Tools Required

You will need the following to work with or view this project:

- A modern web browser (Chrome, Firefox, Edge, Safari)
- A code editor (e.g. VS Code) — if you want to edit the code
- An AWS account — if you want to deploy it yourself
- Git — to clone the repository

### Installation

To run the project locally:

1. Clone the repository:
   ```
   git clone https://github.com/jules001-coder/Interactive-Portfolio-Website-hosted-on-AWS-.git
   ```

2. Navigate into the project folder:
   ```
   cd Interactive-Portfolio-Website-hosted-on-AWS-
   ```

3. Open `index.html` in your browser — no build tools or installs needed.

---

## Project Structure

```
Interactive-Portfolio-Website-hosted-on-AWS-/
│
├── assets/
│   └── css/                        # Project assets folder
│       ├── styles.css              # All styling for the website
│       ├── script.js               # All JavaScript and interactivity
│       ├── images/                 # All photography and visual assets
│       │   ├── portrait/
│       │   │   └── photo.png       # Designer portrait (hero section)
│       │   └── (11 project images)
│       └── resume/
│           └── RN File Structure.pdf
│
├── index.html                      # The entire website (single-page)
└── README.md                       # Project documentation
```

---

## File Description

### `index.html`

The main file of the project. It contains the full structure and content of the site across ten sections:

- Navigation bar with dark/light mode toggle
- Hero section with portrait and typewriter animation
- Animated stats band (80+ projects, 30+ campaigns, 5+ years)
- About, Services, Portfolio (Work), Experience, Education, Skills, Testimonials, Contact
- Footer with social links

### `assets/css/styles.css`

Contains all styling for the website, including:

- CSS custom properties for dark and light theme colours
- Typography using Bebas Neue and Montserrat (Google Fonts)
- Responsive layout with Flexbox and CSS Grid
- Scroll reveal animations and skill bar transitions
- Mobile-first responsive design

### `assets/css/script.js`

Contains all JavaScript for the site's interactive features:

- **Dark / Light mode** — toggles theme and saves to localStorage
- **Mobile menu** — hamburger open/close for small screens
- **Portfolio filter** — filters project cards by category
- **Case study modal** — detailed overlay for each of 8 projects
- **Animated counters** — stats count up on scroll
- **Typewriter effect** — cycles through words in the hero headline
- **Scroll reveal** — elements animate in as the page is scrolled
- **Skill bars** — progress bars animate to their value on scroll
- **Contact form** — handles submission with a toast notification

### `assets/css/images/`

Stores all visual assets used across the site including editorial photography for the portfolio cards, About section, and case study overlays.

### `assets/css/resume/`

Contains a PDF reference document used during the planning phases of the project.

---

## Development

The website was built in phases by a team of five, each with a defined role:

| Role | Responsibility |
|------|---------------|
| PM | Planning, coordination, and timeline management |
| Designer | Visual direction, Figma wireframes, and UI design |
| Developer | HTML, CSS, and JavaScript build |
| AWS Lead | Cloud setup and S3 deployment |
| Writer | Content writing and documentation |

**Tools used during development:**

- **Figma** — UI design and wireframing
- **Relume** — Layout and component planning
- **Bolt.new** — Rapid prototyping
- **Claude** — Code and content assistance

The site features **8 concept case studies** in the portfolio section, each filterable by category:
`Branding` `Campaign` `Packaging` `Digital` `Editorial`

Each project opens a full case study modal with the brief, research, process, deliverables, and outcomes documented inside.

---

## Running the App

No installation or build process is required. To view the site locally:

```
Open index.html in any modern web browser
```

---

## Deployment

The website was deployed using **Amazon S3 Static Website Hosting**.

### Steps

1. Log in to the **AWS Management Console**
2. Open the **Amazon S3** service
3. Create a new S3 bucket with a unique bucket name
4. Upload the following:
   - `index.html`
   - The entire `assets/` folder (including all subfolders)
5. Enable **Static Website Hosting** in the bucket properties
6. Set `index.html` as the index document
7. Disable **Block Public Access** on the bucket
8. Add a bucket policy to allow public read access to all files
9. Copy the generated **S3 Website Endpoint** to access the live site

---

## Challenges Faced

### HTTP vs HTTPS on Mobile Devices

During testing, the site loaded correctly on desktop browsers but some mobile devices showed a **"This site can't be reached"** error.

**Cause:** Amazon S3 Static Website Hosting provides an **HTTP** endpoint by default. Modern mobile browsers prefer or enforce **HTTPS**, which caused some phones to block the connection.

Since this is a portfolio with no sensitive data collection, viewers can still safely access the content. We plan to resolve this fully in the next phase using CloudFront.

---

## Future Improvements

- [ ] Add **Amazon CloudFront** to enable HTTPS and improve global load speed
- [ ] Connect a **custom domain** to replace the S3-generated URL
- [ ] Set up **continuous deployment** from GitHub to S3 on every push
- [ ] Reorganise the `assets/` folder structure (css, js, images, resume as separate subfolders)
- [ ] Add SSL/TLS certificate to remove browser security warnings

---

## Learning Outcomes

This project gave our team practical experience with:

- Structuring a complete single-page website with semantic HTML
- Using CSS custom properties to manage dark/light theming cleanly
- Writing JavaScript for real interactive features (modals, filters, animations)
- AWS cloud services and static website hosting with S3
- Collaborating across design, development, cloud, and writing roles
- Documenting a project for a public GitHub repository

---

## Authors

#### Team Roles

- **PM** — Juliana Oduro
- **Designer** — Juliana Oduro/Joseph Egyir
- **Developer** — Philip Ayelikar (assisted by Juliana Oduro)
- **AWS Lead** — Philip Ayelikar/Joseph Egyir/Purity Chepkmoi
- **Writer** — Blessing/Juliana

---

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) — icons used throughout the site
- [Google Fonts](https://fonts.google.com/) — Bebas Neue and Montserrat typefaces
- [AWS Documentation](https://docs.aws.amazon.com/s3/) — S3 static hosting setup guide
- All team members who contributed across design, development, writing, and cloud
