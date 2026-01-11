import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faScissors,
  faPalette,
  faHandHoldingHeart,
  faHand,
  faStar,
  faSpa,
  faEye,
  faPaintBrush,
} from '@fortawesome/free-solid-svg-icons'

const Main = styled.main`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.sm};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: ${({ theme }) => theme.typography.h2.fontWeight};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`

const ProductCard = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.md};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  
  svg {
    width: 64px;
    height: 64px;
  }
`

const ProductTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`

const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  line-height: 1.5;
`

const ProductPrice = styled.div`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.navText};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const ProductButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 2px solid ${({ theme }) => theme.colors.text.navText};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.navText};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text.navText};
    color: white;
  }
`

const salonOffers = [
  {
    id: 1,
    name: 'Haircut & Styling',
    description: 'Professional haircut with styling and finishing. Includes consultation and hair care tips.',
    price: '$45',
    icon: faScissors,
  },
  {
    id: 2,
    name: 'Hair Coloring',
    description: 'Full hair coloring service with premium products. Includes color consultation and aftercare.',
    price: '$120',
    icon: faPalette,
  },
  {
    id: 3,
    name: 'Facial Treatment',
    description: 'Deep cleansing facial with exfoliation, mask, and moisturizing. Perfect for glowing skin.',
    price: '$75',
    icon: faHandHoldingHeart,
  },
  {
    id: 4,
    name: 'Manicure & Pedicure',
    description: 'Complete nail care service including shaping, cuticle care, polish, and hand/foot massage.',
    price: '$65',
    icon: faHand,
  },
  {
    id: 5,
    name: 'Hair Highlights',
    description: 'Professional highlights to add dimension and brightness to your hair. Includes toning.',
    price: '$95',
    icon: faStar,
  },
  {
    id: 6,
    name: 'Full Makeup',
    description: 'Professional makeup application for special occasions. Includes consultation and touch-up kit.',
    price: '$85',
    icon: faPaintBrush,
  },
  {
    id: 7,
    name: 'Hair Treatment',
    description: 'Deep conditioning treatment to restore shine and strength. Perfect for damaged hair.',
    price: '$55',
    icon: faSpa,
  },
  {
    id: 8,
    name: 'Eyebrow Shaping',
    description: 'Professional eyebrow shaping and tinting to enhance your natural features.',
    price: '$35',
    icon: faEye,
  },
]

function Products() {
  return (
    <Main>
      <Container>
        <Heading>Our Services</Heading>
        <ProductsGrid>
          {salonOffers.map((offer) => (
            <ProductCard key={offer.id}>
              <ProductImage>
                <FontAwesomeIcon icon={offer.icon} />
              </ProductImage>
              <ProductTitle>{offer.name}</ProductTitle>
              <ProductDescription>{offer.description}</ProductDescription>
              <ProductPrice>{offer.price}</ProductPrice>
              <ProductButton>Book Appointment</ProductButton>
            </ProductCard>
          ))}
        </ProductsGrid>
      </Container>
    </Main>
  )
}

export default Products

