import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.sm};
`

const Card = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: ${({ theme }) => theme.typography.h4.fontWeight};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`

const BodyText = styled.p`
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  line-height: ${({ theme }) => theme.typography.body1.lineHeight};
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`

const SecondaryText = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  line-height: ${({ theme }) => theme.typography.body2.lineHeight};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0;
`

function About() {
  return (
    <Main>
      <Card>
        <Heading>About Page</Heading>
        <BodyText>
          This is a Vite + React application with styled-components and React Router.
        </BodyText>
        <SecondaryText>
          Built with modern React patterns including hooks and reducers.
        </SecondaryText>
      </Card>
    </Main>
  )
}

export default About
