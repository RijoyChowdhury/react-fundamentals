import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // checks whether user presses CTRL/CMD key
    // and clicks on tab link
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    // changes pathname without reload
    window.history.pushState({}, '', href);

    // pathname has changed
    // this will communicate
    // with the route components that url has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;
