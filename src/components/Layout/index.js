import layout from './layout.module.scss';

import Side from "../Side";
import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <div className={layout.container}>
    <div className={layout.row}>
      <Side />
      <div className={layout.main}>
        <Navbar />
        {children}
      </div>
    </div>
  </div>
);

export default Layout;