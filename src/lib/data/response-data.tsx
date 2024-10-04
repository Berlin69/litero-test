import {
  IconDropdownOrange,
  IconErrorRed,
  IconSuccessGreen,
} from '../../components/icons';

export interface NotificationResponse {
  alert: Response;
  alert2: Response;
  alert3: Response;
  success: Response;
  errorLong: Response;
}

interface Response {
  icon: React.ReactNode;
  title: string;
  desciption: string;
  recommendations?: Recommendations;
}

interface Recommendations {
  title: string;
  list: string[];
}

export const responseData: NotificationResponse = {
  alert: {
    icon: <IconDropdownOrange />,
    title: 'Improve your instructions to get better result:',
    desciption: 'Choose one topic from this variants',
    recommendations: {
      title:
        'Follow these recommendations to improve your instructions and get better outcome:',
      list: ['Choose one topic', 'Add desired paper structure'],
    },
  },
  alert2: {
    icon: <IconDropdownOrange />,
    title: 'Improve your instructions to get better result:',
    desciption: 'Enter the structure',
    recommendations: {
      title:
        'Follow these recommendations to improve your instructions and get better outcome:',
      list: ['Enter the structure'],
    },
  },
  alert3: {
    icon: <IconDropdownOrange />,
    title: 'Improve your instructions to get better result:',
    desciption: 'Provide main theme and structure',
    recommendations: {
      title:
        'Follow these recommendations to improve your instructions and get better outcome:',
      list: ['Provide main theme', 'Add structure like 1) 2) 3)'],
    },
  },
  success: {
    icon: <IconSuccessGreen />,
    title: 'Well done!',
    desciption: 'It looks like we have enough instructions!',
    recommendations: {
      title:
        'Follow these recommendations to improve your instructions and get better outcome:',
      list: ['Choose one topic', 'Add desired paper structure'],
    },
  },
  errorLong: {
    icon: <IconErrorRed />,
    title: '',
    desciption: 'Your instructions are too long.',
    recommendations: {
      title:
        'Follow these recommendations to improve your instructions and get better outcome:',
      list: ['Choose one topic', 'Add desired paper structure'],
    },
  },
};
