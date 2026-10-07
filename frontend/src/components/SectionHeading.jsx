export default function SectionHeading({ title, children, id, as: Heading = 'h2' }) {
  return (
    <div className="section-heading">
      <Heading id={id}>{title}</Heading>
      {children && <p>{children}</p>}
    </div>
  )
}
