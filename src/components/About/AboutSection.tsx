function AboutSection() {
  return (
    <div id={"about"} className="about-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-16 font-bold text-center">About</h2>
      <div className="bg-black/.9 backdrop-blur-xl">
      <div className="overflow-y-scroll max-h-96 p-8 text-gray-200 custom-background bg-opacity-100 dark:bg-slate-700/30 rounded-2xl text-lg font-medium leading-relaxed">
        <p>I made this website firstly to find a new job :D, and express my creativity.<br />
        In a technical point of view, this website works with <a className="external-link" href="//react.dev">ReactJs</a> and <a className="external-link" href="//v3.tailwindcss.com">TailwindCSS</a> and is hosted in a github-page.
          </p>
        <p>I have 5 years of experience in programming, especially in PHP (the first language I learnt).</p>
        <p>After working severals years a developer, I recently came back to my first role: Versative IT support / helpdesk, because the developer market is become saturated. I have to say that I'm more comfortable with helping people (and I love that !) than be always in the front of a screen for coding.
        I realized it's difficult for me to keep the motivation on working on long programming projects, especially if the project doesn't interest me very much.
        Actually, I prefer to code on personal projects, and make my own tools.<br />
        Computer sciences has always been a passion for me (since I was a teenager), and should stay like that.</p>
      </div>
      </div>
    </div>
  )
}

export default AboutSection

