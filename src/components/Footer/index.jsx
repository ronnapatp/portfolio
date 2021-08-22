import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Ronnapatp Srivoravilai
      <small className={Styles.byline}>🚀 Framework : astro</small>
    </footer>
  );
}
export default Footer;
