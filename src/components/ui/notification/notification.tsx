import { twMerge } from 'tailwind-merge';
import { responseData } from '../../../lib/data/response-data';
interface NotificationProps {
  notification:
    | 'alert'
    | 'success'
    | 'errorLong'
    | 'alert2'
    | 'alert3'
    | 'warning';
}

export const Notification = ({ notification }: NotificationProps) => {
  return (
    <div className=" flex gap-1">
      <div className="flex items-center gap-2 line-clamp-1">
        {responseData[notification].icon}
        <span
          className={twMerge(
            ' font-bold text-xs',
            (notification === 'alert' ||
              notification === 'alert2' ||
              notification === 'alert3') &&
              'text-plt-warning cursor-pointer',
            notification === 'success' && 'text-plt-green-950'
          )}
        >
          {responseData[notification].title}
        </span>
      </div>
      <span
        className={twMerge(
          'line-clamp-1 text-ellipsis text-plt-dark-900 text-xs'
        )}
      >
        {responseData[notification].desciption}
      </span>
      <div
        className={twMerge(
          'h-0 opacity-0 absolute border border-plt-gray bottom-2 left-0 right-0 w-full p-0 bg-plt-white rounded-lg max-h-[240px] overflow-y-scroll custom-y-scroll',
          notification !== 'success' &&
            'group-hover/notification:animate-fade-up group-hover/notification:opacity-100 group-hover/notification:h-fit group-hover/notification:p-4 group-hover/notification:bottom-0'
        )}
      >
        <h3 className="text-plt-warning font-bold text-sm">
          {responseData[notification].recommendations?.title}
        </h3>
        <ul className="list-disc pl-5 text-plt-dark-600 mt-1 text-sm">
          {responseData[notification].recommendations?.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
