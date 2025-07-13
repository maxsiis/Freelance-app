import "./style.css";
import { NavLink } from "react-router-dom";

const Project = ({ title, img, index }) => {
  return (
    <li className="project">
      <NavLink to={`/project/${index}`} className="project__link">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
};

export default Project;
