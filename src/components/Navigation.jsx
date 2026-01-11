import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import pageLogo from '../assets/pageLogo.svg'

const AppBar = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: static;
`

const Toolbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.md};
  min-height: 64px;
width:95vw;
`

const NavTools = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`

const NavBox = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const NavButton = styled(Link)`
  color: ${({ theme }) => theme.colors.text.navText};
  text-decoration: none;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`

const NavIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.navText};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;
  cursor: pointer;
  padding-left:${({ theme }) => theme.spacing.sm};
  padding-top: 5px;
  svg {
    width: ${({ theme }) => theme.typography.body1.fontSize} ;
    height: ${({ theme }) => theme.typography.body1.fontSize} ;
  }
`
function Navigation() {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About' },
  ]

  return (
    <AppBar>
      <Toolbar>
        <img src={pageLogo} alt="Page Logo" style={{ height: '32px' }} />
        <NavTools> <NavBox>
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
          <NavIcon><FontAwesomeIcon icon={faMagnifyingGlass} /></NavIcon>
          <NavIcon><FontAwesomeIcon icon={faCartShopping} /></NavIcon>   </NavTools>    </Toolbar>
    </AppBar>
  )
}

export default Navigation
