import { useEffect, useState } from 'react';
import { IconStars } from '../../icons';
import { Button } from '../../primitives/button';
import useDebounce from '../../../lib/hooks/use-debounce';
import { getResponse } from '../../../lib/utils/get-response';
import { MainTextarea } from '../main-textarea';
import { Notification } from '../notification/notification';
import { ResponseLoading } from '../response-loading';
import { Counter } from '../counter/counter';
import { MainSelects } from '../main-selects';
import { ErrorShort } from '../error-short';
import { twMerge } from 'tailwind-merge';

export const Writer = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [notification, setNotification] = useState<
    | 'none'
    | 'alert'
    | 'success'
    | 'error'
    | 'alert2'
    | 'alert3'
    | 'errorLong'
    | 'warning'
  >('none');

  const debouncedPrompt = useDebounce(prompt, 500);

  // если промпт пустой - убираем уведомление
  useEffect(() => {
    if (prompt.length === 0) {
      setNotification('none');
      setLoading(false);
    }
  }, [prompt]);

  // если промпт больше 10 символов - показываем уведомление + локика простановки вида уведомления
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    setNotification('none');
    if (prompt.length > 10) {
      setNotification('none');
      setLoading(true);
      timeoutId = setTimeout(() => {
        if (prompt.length > 10000) {
          setNotification('errorLong');
        } else {
          setNotification(getResponse());
        }
        setLoading(false);
      }, 1500);
    } else if (debouncedPrompt.length > 0 && debouncedPrompt.length <= 10) {
      setLoading(true);
      timeoutId = setTimeout(() => {
        setNotification('warning');
        setLoading(false);
      }, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [debouncedPrompt]);

  return (
    <div className="mt-8 px-[110px]">
      <div
        className={twMerge(
          'relative border border-plt-gray px-4 pt-3 pb-2 rounded-xl h-[280px] overflow-hidden transition-all',
          (notification === 'error' || notification === 'errorLong') &&
            'border-plt-alert'
        )}
      >
        <MainTextarea prompt={prompt} setPrompt={setPrompt} />
        <div className="group/notification absolute bottom-2 right-4 left-4 w-auto grid grid-cols-[1fr_100px] items-center h-4 cursor-default">
          <div className="flex items-center gap-1">
            {isLoading && <ResponseLoading />}
            {notification === 'warning' && <ErrorShort />}
            {notification === 'none' ||
            notification === 'error' ||
            notification === 'errorLong' ||
            notification === 'warning' ? null : (
              <Notification notification={notification} />
            )}
          </div>
          <Counter prompt={prompt} />
        </div>
      </div>
      <MainSelects />
      <Button className="gap-[10px] font-semibold text-lg text-plt-white py-3 px-5 mt-8 mx-auto bg-gradient-to-r from-plt-gradient-1 to-plt-gradient-2">
        <IconStars fill="#000" />
        <span>Generate For Free</span>
      </Button>
    </div>
  );
};
