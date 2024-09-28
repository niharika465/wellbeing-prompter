import React, { ReactElement } from 'react';
import { SvgIconProps } from '@mui/material';
import './modal.scss';
import { grey } from '@mui/material/colors';
import classNames from 'classnames';
import wellbeing from '../../mocks/wellbeing.json';
import Icons, { IconKeys } from '../../icons/icons';
import CustomButton from '../custom-button/custom-button';
import ChoiceCard from '../choice-card/choice-card';

type OwnProps = {
  isOpen: boolean;
  handleClick: () => void;
  userChoice: string;
  setUserChoice: (value: string) => void;
};

const Modal = ({
  isOpen,
  handleClick,
  setUserChoice,
  userChoice,
}: OwnProps): ReactElement | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={classNames('modal', {
        'modal__content--hidden': !isOpen,
      })}
    >
      <div
        className={classNames('modal__content', {
          'modal__content--hidden': !isOpen,
        })}
      >
        <div className="header">
          <Icons.backIcon
            sx={{ color: grey[500], cursor: 'pointer' }}
            onClick={handleClick}
          />
          <div className="heading">Wellbeing Check-in</div>
          <Icons.closeIcon
            sx={{ color: grey[500], cursor: 'pointer' }}
            onClick={handleClick}
          />
        </div>

        <div className="choices">
          <div className="choices__heading">
            Hello! How are you feeling today?
          </div>
          <div className="choices__container">
            {wellbeing.map(({ sku, value, label, color }) => {
              const IconComponent = Icons[
                value as IconKeys
              ] as React.ComponentType<SvgIconProps>; // Get the icon component based on the value

              return (
                <ChoiceCard
                  key={sku}
                  label={label}
                  color={color}
                  IconComponent={IconComponent}
                  handleClick={() => setUserChoice(value)}
                  isSelected={userChoice === value}
                />
              );
            })}
          </div>
        </div>
        <CustomButton
          label="Continue"
          onClick={handleClick}
          disabled={Boolean(userChoice)}
          styles={{
            base: 'btn',
            conditionals: {
              'btn--disabled': !userChoice,
            },
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
