import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import sublinks from '../data';
import './Sidbar.scss';
const Sidbar = () => {
  const { isSidbarOpen, closeSidbar } = useGlobalContext();
 
  return (
    <div className={`${isSidbarOpen ? 'wrapper show' : 'wrapper'}`}>
      <aside className="Sidbar">
        <button className="Sidbar__close-btn" onClick={closeSidbar}>
          <FaTimes />
        </button>
        <div className="Sidbar__links">
          {sublinks.map(({ links, page }, index) => (
            <article key={index}>
              <h4>{page}</h4>
              <div className="Sidbar__sublinks">
                {links.map(({ Icon, label, url }, index) => (
                  <a href={url} key={index}>
                    <Icon />
                    {label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Sidbar;
