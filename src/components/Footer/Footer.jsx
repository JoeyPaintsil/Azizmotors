import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <h2 className="footer__brand">Aziz Motors</h2>
      <div className="footer__links">
        <a href="#offer">Cash For Cars</a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact Us</a>
        <a href="#privacy">Privacy</a>
        <a href="#resources">Resources</a>
        <span className="footer__location">110 Samaritan Drive Cumming, GA 30040</span>
      </div>
      <a className="footer__phone" href="tel:678-456-8732">
        (678) 456-8732
      </a>
      <small>© 2025 Aziz Motors. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;

