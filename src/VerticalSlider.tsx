import './index.scss'

const VerticalSlider = ({ sections }) => {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      {sections.map((Section, index) => (
        <section
          key={index}
          className={`scroll-snap-child mb-40 min-h-screen flex-${index}`}
        >
          <Section />
        </section>
      ))}
    </div>
  )
}

export default VerticalSlider
