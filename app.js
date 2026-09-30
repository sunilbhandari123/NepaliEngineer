const articles = [
  {slug:"rbb-fifth-level-senior-assistant-it-vacancy-job-roadmap", title:"Rastriya Banijya Bank 5th level Senior Assistant IT job full guidance", cat:"Loksewa & Govt Exams", date:"September 22, 2026", desc:"A roadmap for the RBB 5th level Senior Assistant IT exam, covering vacancy details, syllabus, preparation strategy, subjects, and resources.", body:"<p>A practical roadmap for Computer Engineering and IT graduates preparing for the RBB Senior Assistant IT examination.</p><h2>Vacancy and eligibility</h2><p>Check the current official vacancy notice for the exact seats, eligibility and application deadline.</p><h2>Preparation</h2><p>Build a subject-wise plan, practice objective questions, revise technical fundamentals and reserve time for mock tests.</p>"},
  {slug:"homelabbing-in-nepal-what-i-learned-running-a-server-off-a-second-hand-t450", title:"Homelabbing in Nepal: What I Learned Running a Server Off a Second-Hand T450", cat:"Linux", date:"September 16, 2026", desc:"How a practical homelab in Nepal uses a second-hand ThinkPad T450, Proxmox, Docker and Ethernet.", body:"<p>A practical homelab can be a low-cost way to learn Linux, virtualization, Docker, networking and infrastructure.</p><h2>The hardware</h2><p>A second-hand business laptop can be enough for a useful lab when it has sufficient RAM and storage.</p><h2>Proxmox</h2><p>Proxmox provides a convenient platform for experimenting with virtual machines and containers.</p>"},
  {slug:"monitor-loksewa-vacancies", title:"How to get regular updates of Loksewa vacancies, exam dates, and results", cat:"Loksewa & Govt Exams", date:"September 15, 2026", desc:"A practical approach to monitoring Loksewa Computer Engineering and IT Officer vacancies, notices, exams and results.", body:"<p>Keep important public notices in one workflow instead of manually checking many pages every day.</p><h2>What to monitor</h2><p>Track vacancy notices, application deadlines, examination schedules, results and interview notices from the relevant official sources.</p>"},
  {slug:"lemp-stack-deployment-in-linux", title:"LEMP stack deployment in Linux", cat:"Linux", date:"September 8, 2026", desc:"A step-by-step LEMP and WordPress deployment on a Red Hat Linux server using NGINX, MySQL, PHP, firewall and SELinux.", body:"<p>This guide covers the main steps involved in deploying a LEMP environment on a Red Hat-family Linux server.</p><h2>Core components</h2><ul><li>NGINX</li><li>MySQL or MariaDB</li><li>PHP</li><li>Firewall</li><li>SELinux</li></ul>"},
  {slug:"glassfish-4-1-deployment", title:"Glassfish 4.1 Deployment in Red Hat distribution Linux", cat:"Linux", date:"September 8, 2026", desc:"Deploy GlassFish on a Red Hat Linux distribution with Java, domains, services and configuration.", body:"<p>A deployment guide covering Java, GlassFish domains, service configuration and application testing.</p>"},
  {slug:"install-ssl-certificate-red-hat-linux-nginx", title:"How to install SSL certificate in Red Hat Linux NGINX web server", cat:"Linux", date:"September 8, 2026", desc:"Install and renew SSL certificates on a Red Hat Linux NGINX server, including certificate chains and testing.", body:"<p>This guide covers certificate files, NGINX configuration, certificate chains, backups and safe reloads.</p>"},
  {slug:"linux-commands-production-support-engineer", title:"Linux Commands that I use regularly as a Production Linux Support Engineer in Nepal", cat:"Linux", date:"September 8, 2026", desc:"Practical Linux commands for logs, disk usage, file transfers, services, networking and troubleshooting.", body:"<p>A practical collection of commands useful for production support work, including logs, processes, disk usage, networking and services.</p>"},
  {slug:"nginx-web-server-notes", title:"My notes on NGINX web servers", cat:"Linux", date:"September 8, 2026", desc:"Practical NGINX notes covering installation, server blocks, SSL, reverse proxies and troubleshooting.", body:"<p>Notes covering NGINX installation, server blocks, reverse proxying, SSL and troubleshooting.</p>"},
  {slug:"gitlab-jenkins-polling-webhook", title:"GitLab and Jenkins, Polling vs Webhook Integration", cat:"DevOps", date:"September 5, 2026", desc:"Connect self-hosted GitLab and Jenkins in a Rocky Linux lab using polling and webhooks.", body:"<p>Polling lets Jenkins periodically check for changes. A webhook lets GitLab notify Jenkins immediately when an event occurs.</p><h2>Why webhooks</h2><p>Webhooks can reduce unnecessary polling and trigger automation closer to the time of a repository event.</p>"},
  {slug:"homelab-in-nepal", title:"Homelabbing in Nepal", cat:"Linux", date:"August 31, 2026", desc:"A practical homelab in Nepal using Linux, networking, virtualization and Kubernetes.", body:"<p>Homelabbing creates a safe environment to experiment with servers, virtualization, Linux, containers and networking.</p>"},
  {slug:"loksewa-vacancy-calendar-2083-84", title:"All about Loksewa Vacancy Calendar 2083/84", cat:"Loksewa & Govt Exams", date:"July 17, 2026", desc:"A guide to the Loksewa vacancy and exam calendar for 2083/84.", body:"<p>Use the official calendar and current notices to plan applications and preparation across the public organizations you are targeting.</p>"},
  {slug:"all-about-it-jobs-in-kathmandu-nepal", title:"All About IT Jobs and Careers in Nepal", cat:"IT Careers", date:"July 4, 2026", desc:"A guide to IT jobs in Kathmandu and Nepal, including private careers, government careers, skills and interviews.", body:"<p>This guide covers common IT career paths, fresher skills, practical projects, interview preparation and career planning.</p><h2>Useful skills</h2><ul><li>Git and GitHub</li><li>Linux</li><li>SQL</li><li>Python or Bash</li><li>Docker</li><li>Cloud fundamentals</li></ul>"},
  {slug:"ntc-computer-engineer-exam-guide", title:"NTC Computer Engineer exam guide", cat:"Loksewa & Govt Exams", date:"July 2, 2026", desc:"A Nepal Telecom Computer Engineer roadmap covering syllabus, subjects and preparation strategy.", body:"<p>A preparation roadmap for candidates targeting Nepal Telecom engineering examinations. Always verify the current vacancy notice and syllabus before applying.</p>"},
  {slug:"five-things-it-students-must-learn", title:"Five things every IT student must learn before they graduate", cat:"IT Education", date:"July 1, 2026", desc:"Five practical areas IT students should develop before graduation.", body:"<p>Build practical technical skills, communication, projects, problem solving and professional habits before graduation.</p>"},
  {slug:"how-to-study-computer-engineering-in-nepal", title:"How to study Computer Engineering in Nepal", cat:"IT Education", date:"July 1, 2026", desc:"A practical guide to studying Computer Engineering, preparing for exams and building skills alongside coursework.", body:"<p>Balance academic subjects with hands-on projects, programming, networking, databases, systems and professional communication.</p>"},
  {slug:"computer-engineering-and-bsc-csit-career-guidance", title:"Computer Engineering and BSc.CSIT career guidance for Plus Two Graduates of Nepal", cat:"IT Education", date:"June 22, 2026", desc:"Career guidance for Plus Two graduates comparing Computer Engineering and BSc.CSIT.", body:"<p>Compare curriculum, interests, entrance preparation, practical skills and the career paths you want before choosing a degree.</p>"},
  {slug:"roadmap-to-crack-loksewa-computer-engineer-and-it-officer", title:"Roadmap to crack Loksewa Computer Engineer and IT Officer in six months", cat:"Loksewa & Govt Exams", date:"June 5, 2026", desc:"A six-month study plan for Loksewa Computer Engineer and IT Officer examinations.", body:"<p>Start with the current syllabus, divide the six months into learning, practice and revision phases, and use past questions to identify recurring topics.</p>"},
  {slug:"two-years-in-nepal-tech-support", title:"2 Years in Nepal Tech Support, What I’d Tell My Fresher Self", cat:"IT Careers", date:"May 16, 2026", desc:"Lessons from two years in Nepal’s IT support industry, including fresher jobs, skills and career growth.", body:"<p>Technical fundamentals, communication, troubleshooting discipline and continuous learning are useful foundations for a career in IT support.</p>"},
  {slug:"loksewa-computer-engineer-and-it-officer-in-nepal", title:"Loksewa Computer Engineer and IT Officer in Nepal", cat:"Loksewa & Govt Exams", date:"May 7, 2026", desc:"A guide covering eligibility, syllabus, study strategy, vacancy tracking and preparation resources.", body:"<p>Government engineering and IT roles can vary by organization. Always use the latest official notice and syllabus as the source of truth.</p>"}
];

const app = document.getElementById("app");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const modal = document.getElementById("searchModal");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

function esc(value) {
  return String(value).replace(/[&<>"']/g, function(ch) {
    return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch] || ch;
  });
}

function card(a) {
  return '<article class="card"><span class="tag">'+esc(a.cat)+'</span><h3>'+esc(a.title)+'</h3><p>'+esc(a.desc)+'</p><div class="meta">'+esc(a.date)+'</div><a class="read-more" href="#/article/'+encodeURIComponent(a.slug)+'">Read article →</a></article>';
}

function home() {
  return '<section class="hero"><div class="wrap hero-grid"><div><div class="eyebrow">Nepal engineering & technology</div><h1>Engineering knowledge that actually helps.</h1><p>Practical career guidance, NEC License preparation, government-exam resources, Linux, DevOps and real-world IT lessons for Nepal.</p><div class="actions"><a class="btn btn-primary" href="#/blog">Explore articles</a><a class="btn btn-secondary" href="#/nec-license">NEC License</a></div></div><div class="hero-card"><div class="big">'+articles.length+'+</div><p>Guides across Loksewa, NEC License, IT careers, Linux, DevOps and engineering education.</p><hr><p>Built with a fast, responsive interface for students and engineers.</p></div></div></section><section class="section"><div class="wrap"><div class="section-head"><h2>Featured guides</h2><a href="#/blog">View all →</a></div><div class="grid">'+articles.slice(0,3).map(card).join("")+'</div></div></section><section class="section"><div class="wrap"><div class="section-head"><h2>Latest articles</h2><a href="#/blog">All articles →</a></div><div class="grid">'+articles.slice(3,9).map(card).join("")+'</div></div></section><section class="section"><div class="wrap newsletter"><div><h2>Get new guides in your inbox</h2><p>Stay updated as new engineering and IT guides are published.</p></div><form id="newsletterForm"><input type="email" required placeholder="you@example.com"><button class="btn btn-primary" type="submit">Subscribe</button></form></div></section>';
}

function blog(filter) {
  const active = filter || "All Topics";
  const list = active === "All Topics" ? articles : articles.filter(a => a.cat === active);
  const filters = ["All Topics","Loksewa & Govt Exams","NEC License","IT Careers","IT Education","Linux","DevOps"];
  return '<section class="page-title"><div class="wrap"><div class="eyebrow">Knowledge base</div><h1>Latest from NepaliEngineer</h1><p>Practical articles for students, engineers, freshers and IT professionals in Nepal.</p></div></section><section class="section section-tight"><div class="wrap"><div class="filters">'+filters.map(x => '<a class="filter '+(x===active?'active':'')+'" href="#/category/'+encodeURIComponent(x)+'">'+x+'</a>').join("")+'</div><div class="grid">'+(list.length ? list.map(card).join("") : '<div class="empty card"><h3>More NEC License content is coming</h3><p>The NEC License section is ready for the upcoming study guides and question banks.</p></div>')+'</div></div></section>';
}

function article(slug) {
  const a = articles.find(x => x.slug === slug);
  if (!a) return simple("Article not found","<p>The requested article could not be found.</p><p><a class='read-more' href='#/blog'>Back to blog →</a></p>");
  return '<section class="article-wrap"><div class="wrap"><article class="article"><a class="back" href="#/blog">← Back to articles</a><span class="tag">'+esc(a.cat)+'</span><h1>'+esc(a.title)+'</h1><div class="meta">'+esc(a.date)+' · NepaliEngineer</div><p class="lead">'+esc(a.desc)+'</p><hr>'+a.body+'<div class="article-end"><a class="btn btn-primary" href="#/blog">Browse more articles</a></div></article></div></section>';
}

function simple(title, body) {
  return '<section class="article-wrap"><div class="wrap"><article class="article"><a class="back" href="#/">← Home</a><h1>'+title+'</h1>'+body+'</article></div></section>';
}

function nec() {
  return '<section class="page-title"><div class="wrap"><div class="eyebrow">Computer Engineering</div><h1>NEC License</h1><p>Study resources for the Nepal Engineering Council Computer Engineering Registration Examination.</p></div></section><section class="section section-tight"><div class="wrap"><div class="nec-grid"><a class="nec-card" href="#/nec-license/digital-logic"><span>01</span><h3>Digital Logic & Microprocessor</h3><p>Number systems, logic gates, Boolean algebra, sequential logic, microprocessors and related MCQs.</p></a><a class="nec-card" href="#/nec-license/networks"><span>02</span><h3>Computer Networks</h3><p>Networking fundamentals, protocols, distributed systems and examination-focused revision.</p></a><a class="nec-card" href="#/nec-license/software"><span>03</span><h3>Software Engineering</h3><p>Process, requirements, design, testing, quality and software project topics.</p></a><a class="nec-card" href="#/nec-license/ai"><span>04</span><h3>AI & Neural Networks</h3><p>AI, intelligent agents, search, knowledge representation, neural networks and machine learning.</p></a></div></div></section>';
}

function necTopic(topic) {
  const names={ "digital-logic":"Digital Logic & Microprocessor", networks:"Computer Networks & Distributed Systems", software:"Software Engineering", ai:"AI & Neural Networks" };
  return simple(names[topic] || "NEC License Topic", "<p>This NEC License section is prepared as a structured study area. Question banks, past questions and topic-wise MCQs can be added here.</p><h2>What you will find here</h2><ul><li>Topic-wise notes</li><li>Past questions</li><li>Model questions</li><li>Practice MCQs</li><li>10-mark question preparation</li></ul>");
}

function render() {
  const raw = (location.hash || "#/").slice(2);
  const parts = raw.split("/");
  const route = decodeURIComponent(parts[0] || "");
  if (route === "article") app.innerHTML = article(decodeURIComponent(parts[1] || ""));
  else if (route === "blog") app.innerHTML = blog("All Topics");
  else if (route === "category") app.innerHTML = blog(decodeURIComponent(parts.slice(1).join("/")));
  else if (route === "nec-license") app.innerHTML = parts[1] ? necTopic(decodeURIComponent(parts[1])) : nec();
  else if (route === "about") app.innerHTML = simple("About NepaliEngineer","<p>NepaliEngineer is a practical knowledge platform for Nepali engineering students, freshers and IT professionals.</p><p>The platform focuses on career guidance, NEC License preparation, government technology exams, Linux, DevOps, servers, engineering education and practical IT skills.</p>");
  else if (route === "contact") app.innerHTML = simple("Contact","<p>For corrections, partnerships or content questions, use the contact details configured by the site owner.</p>");
  else if (route === "privacy") app.innerHTML = simple("Privacy Policy","<p>NepaliEngineer respects your privacy. Information should only be collected for services you explicitly use, such as forms or newsletters.</p>");
  else if (route === "disclaimer") app.innerHTML = simple("Disclaimer","<p>Articles are for informational and educational purposes. Vacancy, syllabus, salary and examination information can change, so verify important details with the relevant official organization.</p>");
  else app.innerHTML = home();

  nav.classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
  bindPageForms();
}

function bindPageForms() {
  const form = document.getElementById("newsletterForm");
  if (form) form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks! Newsletter integration can be connected when you choose an email provider.");
  });
}

window.addEventListener("hashchange", render);

menuBtn.addEventListener("click", function() {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(function(link) {
  link.addEventListener("click", function() { nav.classList.remove("open"); });
});

document.getElementById("searchOpen").addEventListener("click", function() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
  searchInput.focus();
});

document.getElementById("searchClose").addEventListener("click", function() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
});

modal.addEventListener("click", function(e) {
  if (e.target === modal) modal.classList.remove("open");
});

searchInput.addEventListener("input", function(e) {
  const q = e.target.value.toLowerCase().trim();
  if (!q) { searchResults.innerHTML = ""; return; }
  const matches = articles.filter(a => (a.title+" "+a.desc+" "+a.cat).toLowerCase().includes(q));
  searchResults.innerHTML = matches.length ? matches.map(a => '<div class="result"><a href="#/article/'+encodeURIComponent(a.slug)+'">'+esc(a.title)+'</a><br><small>'+esc(a.cat)+' · '+esc(a.date)+'</small></div>').join("") : "<p>No matching articles.</p>";
});

window.addEventListener("scroll", function() {
  const d = document.documentElement;
  const max = d.scrollHeight - d.clientHeight;
  document.getElementById("progress").style.width = max > 0 ? (d.scrollTop/max*100)+"%" : "0%";
});

render();