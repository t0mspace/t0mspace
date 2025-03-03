import linkedin from '../../assets/images/icons8-linkedin.svg'
import github from '../../assets/images/icons8-github.svg'

function ContactSection() {
  const data = {
    'email': 'thomasbrenard@gmail.com',
    'socialLinks': [
      {
        'name': 'LinkedIn',
        'url': '//www.linkedin.com/in/thomas-b-a0642642',
        'icon': linkedin
      },
      {
        'name': 'GitHub',
        'url': '//github.com/t0mspace',
        'icon': github
      }
    ]
  }

  const openEmailClient = () => {
    if (data.email) {
      window.location.href = `mailto:${data.email}`
    }
  }
  return (
    <div id={"contact"} className="about-section max-w-3xl mx-auto">
      <h2 className="text-4xl mb-16 font-bold text-center">Contact</h2>
      <div className="text-left">
        <p className="text-gray-700 dark:text-gray-200 mb-6 transition-colors duration-200">Feel free to reach out to me
          via &nbsp;
          <span className="external-link" onClick={openEmailClient}>email</span>
        </p>

        <div className="flex  space-x-4">
          <p> or connect on social media!</p>
          {data.socialLinks.map((item, index) => (
            <a key={index} href={item.url} target="_blank"
               rel="noopener noreferrer"
               className="cursor-pointer text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors
        duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 rounded-full">
              <img src={item.icon} alt={item.name} className="h-10 w-10" />
            </a>
          ))
          }

        </div>

      </div>
    </div>
  )
}

export default ContactSection

