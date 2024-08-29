import "./Header.scss";
import img from "../../images/Logo.svg";

export function Header() {
  return (
    <div className="header">
      <img src={img} alt="Logo" />
    </div>
  );
}
