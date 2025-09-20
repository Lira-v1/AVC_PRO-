import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>AVC PRO</h1>
      <p>Производство и монтаж металлоконструкций, спортивного оборудования и инженерных решений.</p>
    </div>
  );
}

function Catalog() {
  return <h2>Каталог</h2>;
}
function Portfolio() {
  return <h2>Наши проекты</h2>;
}
function Delivery() {
  return <h2>Доставка и оплата</h2>;
}
function About() {
  return <h2>О компании</h2>;
}
function Contacts() {
  return <h2>Контакты</h2>;
}

export default function App() {
  return (
    <div>
      <nav style={{ background: "#222", padding: "1rem" }}>
        <Link to="/" style={{ margin: "0 1rem" }}>Главная</Link>
        <Link to="/catalog" style={{ margin: "0 1rem" }}>Каталог</Link>
        <Link to="/portfolio" style={{ margin: "0 1rem" }}>Наши проекты</Link>
        <Link to="/delivery" style={{ margin: "0 1rem" }}>Доставка и оплата</Link>
        <Link to="/about" style={{ margin: "0 1rem" }}>О компании</Link>
        <Link to="/contacts" style={{ margin: "0 1rem" }}>Контакты</Link>
      </nav>
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  );
}
