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

export const Writer = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [notification, setNotification] = useState<
    'none' | 'alert' | 'success' | 'error' | 'alert2' | 'alert3' | 'errorLong'
  >('none');

  const debouncedPrompt = useDebounce(prompt, 500);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (prompt.length === 0) {
      setNotification('none');
    }
    if (prompt.length > 0 && prompt.length <= 10)
      timeoutId = setTimeout(() => {
        setNotification('error');
      }, 1000);

    return () => clearTimeout(timeoutId);
  }, [prompt]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (prompt.length > 10) {
      setNotification('none');
      setLoading(true);
      timeoutId = setTimeout(() => {
        if (prompt.length > 10000) {
          setNotification('errorLong');
        } else {
          setNotification(getResponse());
        }
        console.log(getResponse());
        setLoading(false);
      }, 1500);
    } else {
      setLoading(false);
    }
    return () => clearTimeout(timeoutId);
  }, [debouncedPrompt]);

  return (
    <div className="mt-8 px-[110px]">
      <div className="relative border border-plt-gray px-4 pt-3 pb-2 rounded-xl h-[280px]">
        <MainTextarea prompt={prompt} setPrompt={setPrompt} />
        <div className="absolute bottom-2 right-4 left-4 w-auto grid grid-cols-[1fr_100px] items-center h-4">
          <div className="flex items-center gap-1">
            {isLoading && <ResponseLoading />}
            {notification === 'error' && <ErrorShort />}
            {notification === 'none' || notification === 'error' ? null : (
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
