function AboutSection() {
  return (
    <div id={"about"} className="about-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-16 font-bold text-center">About</h2>
      <div className="bg-black/.9 backdrop-blur-xl">
      <div className="p-8 text-gray-200 bg-slate-100/100 dark:bg-slate-700/30 rounded-2xl text-lg font-medium leading-relaxed">
        <p>I made this website firstly to find a new job :D, and express my creativity.<br />
        In a technical point of view, this website works with <a className="external-link" href="//react.dev">ReactJs</a> and <a className="external-link" href="//v3.tailwindcss.com">TailwindCSS</a> and is hosted in a github-page.
          </p>
      </div>
      </div>
    </div>
  )
}

export default AboutSection

