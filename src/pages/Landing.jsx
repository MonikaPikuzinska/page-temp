import { useReducer } from 'react'
import styled from 'styled-components'
import {
  landingReducer,
  initialState,
  actionTypes,
} from './landingReducer'

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
  max-width: 500px;
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

const Subheading = styled.p`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
`

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const CounterText = styled.h2`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: ${({ theme }) => theme.typography.h6.fontWeight};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.colors.text.primary};
`

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: ${({ $variant, theme }) =>
    $variant === 'outlined'
      ? `2px solid ${theme.colors.primary}`
      : '2px solid transparent'};
  background-color: ${({ $variant, theme }) =>
    $variant === 'contained' ? theme.colors.primary : 'transparent'};
  color: ${({ $variant, theme }) =>
    $variant === 'contained' ? 'white' : theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: ${({ $fullWidth }) => ($fullWidth ? '1 1 100%' : '0 0 auto')};

  &:hover:not(:disabled) {
    background-color: ${({ $variant, theme }) =>
      $variant === 'contained'
        ? theme.colors.primary
        : 'rgba(26, 115, 232, 0.1)'};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const SecondaryButton = styled(Button)`
  background-color: ${({ $variant, theme }) =>
    $variant === 'contained' ? theme.colors.secondary : 'transparent'};
  border-color: ${({ $variant, theme }) =>
    $variant === 'outlined' ? theme.colors.secondary : 'transparent'};
  color: ${({ $variant, theme }) =>
    $variant === 'contained' ? 'white' : theme.colors.secondary};

  &:hover:not(:disabled) {
    background-color: ${({ $variant, theme }) =>
      $variant === 'contained'
        ? theme.colors.secondary
        : 'rgba(156, 39, 176, 0.1)'};
  }
`

const Spinner = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

const Alert = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ $severity, theme }) => {
    switch ($severity) {
      case 'error':
        return theme.colors.error
      case 'success':
        return theme.colors.success
      default:
        return theme.colors.info
    }
  }};
  color: white;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`

function Landing() {
  const [state, dispatch] = useReducer(landingReducer, initialState)

  const handleIncrement = () => {
    dispatch({ type: actionTypes.INCREMENT })
  }

  const handleDecrement = () => {
    dispatch({ type: actionTypes.DECREMENT })
  }

  const handleReset = () => {
    dispatch({ type: actionTypes.RESET })
  }

  const handleLoadData = async () => {
    dispatch({ type: actionTypes.SET_LOADING, payload: true })
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      dispatch({
        type: actionTypes.SET_DATA,
        payload: { message: 'Data loaded successfully!' },
      })
    } catch (error) {
      dispatch({
        type: actionTypes.SET_ERROR,
        payload: error.message,
      })
    }
  }

  return (
    <Main>
      <Card>
        <Heading>Landing Page</Heading>
        <Subheading>This component uses a reducer to manage state</Subheading>

        {/* Counter Section */}
        <Section>
          <CounterText>Counter: {state.count}</CounterText>
          <ButtonGroup>
            <Button
              $variant="outlined"
              onClick={handleDecrement}
              disabled={state.isLoading}
            >
              Decrement
            </Button>
            <Button
              $variant="outlined"
              onClick={handleReset}
              disabled={state.isLoading}
            >
              Reset
            </Button>
            <Button
              $variant="contained"
              onClick={handleIncrement}
              disabled={state.isLoading}
            >
              Increment
            </Button>
          </ButtonGroup>
        </Section>

        {/* Data Loading Section */}
        <Section>
          <SecondaryButton
            $variant="contained"
            onClick={handleLoadData}
            disabled={state.isLoading}
            $fullWidth
          >
            {state.isLoading ? <Spinner /> : 'Load Data'}
          </SecondaryButton>
        </Section>

        {/* Error Display */}
        {state.error && (
          <Alert $severity="error">{state.error}</Alert>
        )}

        {/* Data Display */}
        {state.data && (
          <Alert $severity="success">{state.data.message}</Alert>
        )}
      </Card>
    </Main>
  )
}

export default Landing
