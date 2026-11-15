import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Reviews from './pages/Reviews.jsx';
import Contacts from './pages/Contacts.jsx';
function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});},[pathname]);return null;}
function NotFound(){return <main className="not-found"><h1>404</h1><p>Такой страницы нет.</p><Link className="btn btn-primary" to="/">На главную</Link></main>}
export default function App(){return <><ScrollToTop/><Header/><main><Routes><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/reviews" element={<Reviews/>}/><Route path="/contacts" element={<Contacts/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>}
