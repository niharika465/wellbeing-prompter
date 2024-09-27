import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import SentimentVerySatisfiedTwoToneIcon from '@mui/icons-material/SentimentVerySatisfiedTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import MoodBadTwoToneIcon from '@mui/icons-material/MoodBadTwoTone';
import TagFacesTwoToneIcon from '@mui/icons-material/TagFacesTwoTone';
import SentimentSatisfiedTwoToneIcon from '@mui/icons-material/SentimentSatisfiedTwoTone';
import { SvgIconProps } from '@mui/material';

// possible keys for the Icons object
export type IconKeys =
  | 'backIcon'
  | 'closeIcon'
  | 'terrible'
  | 'bad'
  | 'fantastic'
  | 'pretty_good'
  | 'alright';

// Icons object type
type IconsType = {
  [key in IconKeys]: React.ComponentType<SvgIconProps>;
};

const Icons: IconsType = {
  backIcon: ArrowBackIcon,
  closeIcon: CloseIcon,
  terrible: SentimentVeryDissatisfiedTwoToneIcon,
  bad: MoodBadTwoToneIcon,
  fantastic: SentimentVerySatisfiedTwoToneIcon,
  pretty_good: TagFacesTwoToneIcon,
  alright: SentimentSatisfiedTwoToneIcon,
};

export default Icons;
