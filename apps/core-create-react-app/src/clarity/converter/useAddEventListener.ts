import { RefObject, useEffect, useRef } from 'react';

type EventName = string;

export const useAddEventListener = <Target extends HTMLElement>(ref: RefObject<Target>) => {
  const eventListeners = useRef<[EventName, EventListener][]>([]);

  useEffect(() => () => {
    eventListeners.current.forEach(([event, handler]) => ref?.current?.removeEventListener(event, handler));
    eventListeners.current = [];
  });

  return (propertyName: string, propertyValue: EventListener) => {
    const eventName = propertyName.replace(/on./u, prefix => prefix.substr(2).toLowerCase());
    const handler: EventListener = (event: Event) => propertyValue(event);
    eventListeners.current = [...eventListeners.current, [eventName, handler]];
    ref?.current?.addEventListener(eventName, handler);
  };
};

export default useAddEventListener;
