import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const AppBar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: static;
`

const Toolbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  min-height: 64px;
`

const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  flex-grow: 1;
`

const NavBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const NavButton = styled(Link)`
  color: white;
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: ${({ $active, theme }) =>
    $active ? `2px solid white` : '2px solid transparent'};
  background-color: ${({ $active }) => ($active ? 'rgba(255, 255, 255, 0.1)' : 'transparent')};
  transition: all 0.2s ease;
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
  ]

  return (
    <AppBar>
      <Toolbar>
        <Title>Page Temp</Title>
        <NavBox>
          {navItems.map((item) => (
            <NavButton
              key={item.path}
              to={item.path}
              $active={location.pathname === item.path}
            >
              {item.label}
            </NavButton>
          ))}
        </NavBox>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
