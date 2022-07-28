import "./Menu.css";

const Menu = ({ onClick }) => (
  <div className="Menu">
    <button className="Button" onClick={onClick}>
      Play Tetris 
      <br></br>
      (tablet size version)
    </button>
  </div>
);

export default Menu;
