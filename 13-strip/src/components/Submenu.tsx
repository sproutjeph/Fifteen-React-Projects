import React, { useEffect, useRef, useState } from 'react';
import { useGlobalContext } from '../context';
import './Submenu.scss';
const Submenu = () => {
  const {
    isSubMenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();

  const container = useRef<HTMLElement>(null);
  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu!.style.left = `${center}px`;
    submenu!.style.top = `${bottom}px`;
    console.log(links);
    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [page, location, links]);
  return (
    <aside
      className={`${isSubMenuOpen ? 'Submenu show' : 'Submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`Submenu-center ${columns}`}>
          {links.map((link) => (
            <a href={link.url}>
              <link.Icon />
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
