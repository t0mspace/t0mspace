import './index.scss'

const VerticalSlider = ({ sections }) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen p-5">
      {sections.map((Section, index) => (
        <section
          key={index}
          className={`scroll-snap-child mb-40 min-h-screen flex-${index} w-full md:w-auto`}
        >
          <Section />
        </section>
      ))}
    </div>
  )
}

export default VerticalSlider
