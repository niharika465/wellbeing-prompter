import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../modal';
import wellbeing from '../../../mocks/wellbeing.json';

type ChoiceCardProps = {
  label: string;
  isSelected: boolean;
  handleClick: () => void;
};

jest.mock(
  '../../choice-card/choice-card',
  () =>
    ({ label, handleClick, isSelected }: ChoiceCardProps) => (
      <div
        data-testid="choice-card"
        className={isSelected ? 'selected' : ''}
        onClick={handleClick}
      >
        {label}
      </div>
    )
);

describe('Modal Component', () => {
  const handleClick = jest.fn();
  const setUserChoice = jest.fn();
  const userChoice = '';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing when closed', () => {
    const { asFragment } = render(
      <Modal
        isOpen={false}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    const modal = screen.queryByText('Wellbeing Check-in');
    expect(modal).not.toBeInTheDocument(); // Modal should not be visible
  });

  test('renders correctly when open', () => {
    const { asFragment } = render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );
    expect(asFragment()).toMatchSnapshot();
    const modalHeader = screen.getByText('Wellbeing Check-in');
    expect(modalHeader).toBeInTheDocument(); // Modal should be visible
  });

  test('calls handleClick when back icon is clicked', () => {
    render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );

    const backIcon = screen.getByTestId('ArrowBackIcon');
    fireEvent.click(backIcon);

    expect(handleClick).toHaveBeenCalledTimes(1); // handleClick should be called
  });

  test('calls handleClick when close icon is clicked', () => {
    render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );

    const closeIcon = screen.getByTestId('CloseIcon');
    fireEvent.click(closeIcon);

    expect(handleClick).toHaveBeenCalledTimes(1); // handleClick should be called
  });

  test('renders choice cards and calls setUserChoice', () => {
    render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );

    wellbeing.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument(); // Each choice label should be rendered
    });

    const choiceCard = screen.getByText(wellbeing[0].label);
    fireEvent.click(choiceCard);

    expect(setUserChoice).toHaveBeenCalledWith(wellbeing[0].value); // setUserChoice should be called with the correct value
  });

  test('CustomButton should be disabled if no userChoice', () => {
    render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );

    const button = screen.getByText('Continue');
    expect(button).toHaveClass('btn--disabled'); // Button should be disabled
  });

  test('CustomButton should not be disabled if userChoice is set', () => {
    const userChoice = wellbeing[0].value;

    render(
      <Modal
        isOpen={true}
        handleClick={handleClick}
        userChoice={userChoice}
        setUserChoice={setUserChoice}
      />
    );

    const button = screen.getByText('Continue');
    expect(button).not.toHaveClass('btn--disabled'); // Button should be enabled
  });
});
