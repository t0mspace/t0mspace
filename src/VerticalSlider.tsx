import './index.scss'

const VerticalSlider = ({ sections }) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen overflow-y-scroll scroll-snap">
      {sections.map((Section, index) => (
        <section
          key={index}
          className={`scroll-snap-child mb-16 ml-5 lg:ml-20 min-h-screen flex-${index}`}
        >
          <Section />
        </section>
      ))}
    </div>
  )
}

export default VerticalSlider
