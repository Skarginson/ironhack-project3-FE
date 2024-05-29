import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/Link1">Link1</Link>
      <Link to="/Link2">Link2</Link>
    </div>
  );
}

export default Sidebar;
