import { Link, NavLink } from 'react-router-dom';
import { Wrench, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [['/', 'Главная'], ['/services', 'Услуги'], ['/reviews', 'Отзывы'], ['/contacts', 'Контакты']];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav-wrap">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Wrench size={22}/></span><span>GARAGE <b>47</b><small>АВТОСЕРВИС</small></span></Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Открыть меню">{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav open' : 'nav'}>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    <a className="nav-phone" href="tel:+70000000000"><Phone size={16}/> +7 (000) 000-00-00</a>
  </div></header>;
}
