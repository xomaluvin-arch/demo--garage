import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
export default function Footer() { return <footer className="footer"><div className="container footer-grid">
  <div><Link to="/" className="brand footer-brand"><span className="brand-mark"><span>⚒</span></span><span>GARAGE <b>47</b><small>АВТОСЕРВИС</small></span></Link><p className="muted">Надёжный уход за вашим автомобилем. Демонстрационный сайт для портфолио.</p></div>
  <div><h4>Навигация</h4><Link to="/services">Услуги</Link><Link to="/reviews">Отзывы</Link><Link to="/contacts">Контакты</Link></div>
  <div><h4>Контакты</h4><p><MapPin size={15}/> Смоленск, ул. Примерная, 10</p><p><Phone size={15}/> +7 (000) 000-00-00</p><p><Clock size={15}/> Пн–Сб: 09:00–20:00</p></div>
</div><div className="container footer-bottom"><span>© 2026 GARAGE 47. Демонстрационный проект.</span><span>Все данные на сайте вымышлены.</span></div></footer>; }
