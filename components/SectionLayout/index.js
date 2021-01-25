import { Section } from './styles'

export const SectionLayout = ({ children }) => {
  return(
    <Section>
      {/* Navbar */}
      {children}
      {/* Footer */}
    </Section>
  )
}