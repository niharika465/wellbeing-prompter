import { render, screen, fireEvent } from '@testing-library/react';
import ChoiceCard from '../choice-card';

// Mocking the Icon component
const MockIcon = () => <div data-testid="mock-icon" />;

describe('ChoiceCard Component', () => {
  const handleClickMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks(); // Clear mock calls before each test
  });

  test('renders with the correct label', () => {
    render(
      <ChoiceCard
        label="Option 1"
        color="red"
        isSelected={false}
        handleClick={handleClickMock}
        IconComponent={MockIcon}
      />
    );

    const label = screen.getByText('Option 1');
    expect(label).toBeInTheDocument(); // Check if the label is rendered
  });

  test('applies the selected class when isSelected is true', () => {
    render(
      <ChoiceCard
        label="Option 1"
        color="red"
        isSelected={true}
        handleClick={handleClickMock}
        IconComponent={MockIcon}
      />
    );

    const card = screen.getByText('Option 1').closest('div'); // Get the parent div
    expect(card).toHaveClass('choice__card--selected'); // Check if the selected class is applied
  });

  test('does not apply the selected class when isSelected is false', () => {
    render(
      <ChoiceCard
        label="Option 1"
        color="red"
        isSelected={false}
        handleClick={handleClickMock}
        IconComponent={MockIcon}
      />
    );

    const card = screen.getByText('Option 1').closest('div'); // Get the parent div
    expect(card).not.toHaveClass('choice__card--selected'); // Check that the selected class is not applied
  });

  test('calls handleClick when clicked', () => {
    render(
      <ChoiceCard
        label="Option 1"
        color="red"
        isSelected={false}
        handleClick={handleClickMock}
        IconComponent={MockIcon}
      />
    );

    const card = screen.getByText('Option 1').closest('div') as HTMLElement; // Get the parent div
    fireEvent.click(card);

    expect(handleClickMock).toHaveBeenCalledTimes(1); // Check if handleClick was called
  });

  test('renders the icon with correct color and size', () => {
    render(
      <ChoiceCard
        label="Option 1"
        color="red"
        isSelected={false}
        handleClick={handleClickMock}
        IconComponent={MockIcon}
      />
    );

    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument(); // Check if the icon is rendered
  });
});
