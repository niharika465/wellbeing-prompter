import React from 'react';
import classNames from 'classnames';
import { SvgIconProps } from '@mui/material/SvgIcon';
import './choice-card.scss';

type ChoiceCardProps = {
  label: string;
  color: string;
  isSelected: boolean;
  handleClick: () => void;
  IconComponent: React.ComponentType<SvgIconProps>;
};

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  label,
  color,
  isSelected,
  handleClick,
  IconComponent,
}) => {
  return (
    <div
      onClick={handleClick}
      className={classNames('choice__card', {
        'choice__card--selected': isSelected,
      })}
    >
      <IconComponent
        sx={{
          color,
          width: '4rem',
          height: '4rem',
          display: 'block',
        }}
      />
      <span className="choice__label">{label}</span>
    </div>
  );
};

export default ChoiceCard;
