import { RefObject, useEffect, useRef } from 'react';

/**
 * Add event listener hook.
 *
 * @param ref Ref to the DOM element.
 */
export const useAddEventListener = <Target extends HTMLElement>(ref: RefObject<Target>) => {
  /** Event listener tuple array [eventName, listener]. */
  const eventListeners = useRef<[string, EventListener][]>([]);

  useEffect(() => () => {
    eventListeners.current.forEach(([event, handler]) => ref.current?.removeEventListener(event, handler));
    eventListeners.current = [];
  });

  return (propertyName: string, propertyValue: EventListener) => {
    /** Transform onEventName into eventName */
    const eventName = propertyName.replace(/on./u, prefix => prefix.substr(2).toLowerCase());
    const handler: EventListener = (event: Event) => propertyValue(event);
    eventListeners.current = [...eventListeners.current, [eventName, handler]];
    ref.current?.addEventListener(eventName, handler);
  };
};

export default useAddEventListener;
