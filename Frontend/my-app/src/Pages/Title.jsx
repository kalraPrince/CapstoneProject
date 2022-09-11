import { Helmet } from "react-helmet";
import "../Styles/Title.css"

const Title = ({ title }) => {
  return (
      <div className="title pb-4">
      <div className="title__line"></div>
      <h1 className="title__heading">________________      {title}     ________________</h1>
      <div className="title__line"></div>
    </div>
  );
};

export default Title;