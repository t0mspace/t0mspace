import linkedin from '../../assets/images/icons8-linkedin.svg'
import github from '../../assets/images/icons8-github.svg'

function ContactSection() {
  const data = {
    'email': 'thomasbrenard@gmail.com',
    'socialLinks': [
      {
        'name': 'LinkedIn',
        'url': 'https://www.linkedin.com/in/thomas-b-a0642642',
        'icon': linkedin
      },
      {
        'name': 'GitHub',
        'url': 'https://github.com/t0mspace',
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
    <div className="about-section">
      <h2 className="text-4xl mb-16 font-bold ml-8">Contact</h2>
      <div className="flex flex-col align-center justify-center p-8">
        <p className="text-gray-700 dark:text-gray-200 mb-6 transition-colors duration-200">Feel free to reach out to me
          via
          email or connect on social media!
        </p>
        <button onClick={openEmailClient}
                className="bg-primary text-white hover:bg-primary-400 font-semibold py-2 px-4 rounded-md transition-all duration-300 text-sm md:text-base flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl ease-in-out transform hover:-translate-y-1 bg-gradient-to-bl from-primary-400 to-primary-600 hover:from-primary-500 hover:to-primary-700 dark:from-primary-500 dark:to-primary-700 dark:hover:from-primary-600 dark:hover:to-primary-800 focus:ring-2 focus:ring-primary-300 dark:focus:ring-primary-600 focus:outline-none">
          Send me an email
        </button>
        <div className="flex  space-x-4">
          {data.socialLinks.map((item, index) => (
            <a key={index} href={item.url} target="_blank"
               rel="noopener noreferrer"
               className="text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors
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

