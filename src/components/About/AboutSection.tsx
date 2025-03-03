function AboutSection() {
  return (
    <div id={"about"} className="about-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-16 font-bold text-center">About</h2>
      <div className="bg-black/.9 backdrop-blur-xl">
      <div className="p-8 text-gray-200 bg-slate-100/100 dark:bg-slate-700/30 rounded-2xl text-lg font-medium leading-relaxed">
        <p>I made this website firstly to find a new job :D, and express my creativity.<br />
        In a technical point of view, this website works with <a className="external-link" href="//react.dev">ReactJs</a> and <a className="external-link" href="//v3.tailwindcss.com">TailwindCSS</a> and is hosted in a github-page.
          </p>
        <p>I have 5 years of experience in POO, especially in PHP (the first language I learnt) and vanilla javascript,<br />
        and I use Docker regularly because it's an amazing tool to switch easily between different database (for ex: Mysql and PostgreSQL) and from project to another.</p>
        <p>I also worked on a Java project using Spring Boot 3, Angular and microservices (3) when I was on the bench, 3 months ago.<br/>
          It wasn't a piece of cake like said the project manager: it was really intensive but also really challenging and interesting:
        I love to be autonomous on the choice of technologies and touch a bit to everything (dev in Java + Angular + Linux administration).
        I was fortunately not alone, a colleague helped me to setup the server (when I was too desperate by an issue and ready to throw myself by the window)</p>
        <br />
        <p>Here's the technologies we installed in the vps: Docker (root-less), firewall-d, Spring Boot, PostgreSQL, GitLab and Traefik as reverse proxy.
        But the other side of the coin when I have the cap of dev, devops, and sysadmin is that I become a bit too much scattered.</p>
        <br />
        <p>It was the occasion to become a mentor of an another colleague who came from Microsoft technologies, kew nothing on Linux and java and wanted to learn Angular.
        I noticed It was not easy to explain some concept while going forward to my own tasks, but I love to share my knowledges. </p>

      </div>
      </div>
    </div>
  )
}

export default AboutSection

