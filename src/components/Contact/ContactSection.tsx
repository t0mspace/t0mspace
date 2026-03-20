import { data } from '../Common/infos'

function ContactSection() {

  const openEmailClient = () => {
    if (data.email) {
      window.location.href = `mailto:${data.email}`
    }
  }
  return (
    <div id={"contact"} className="about-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-12 font-bold text-center">Contact</h2>
      <div className="text-left leading-3 bg-black/.9 backdrop-blur-xl p-8 text-gray-200 custom-background bg-opacity-100 dark:bg-slate-700/30 rounded-2xl transform duration-300 cursor-pointer flex flex-col justify-between">
        <p>Feel free to reach out to me
          via &nbsp;
          <span className="transition-colors duration-200 external-link" onClick={openEmailClient}>email</span>
        </p>
        <p> or connect on social media!</p>
        <ul className="list-unstyled flex flex-row flex-nowrap mt-8 gap-4">
          {data.socialLinks.map((item) => (
            <li key={item.name}>
              <a href={item.url} target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors
       duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 rounded-full">
                <img src={item.icon} alt={item.name} className="h-10 w-10" />
              </a>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default ContactSection

