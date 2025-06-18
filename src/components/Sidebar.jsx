import { Link } from 'react-router-dom';
import '../style/style.css';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Nutri Mind</h2>
    <ul>
      <li><Link to="/">🏠 Home</Link></li>
      <li><Link to="/preferences">⚙️ Preferences</Link></li>
      <li><Link to="/dashboard" className="active">📊 Dashboard</Link></li>
    </ul>
  </aside>
);

export default Sidebar;
