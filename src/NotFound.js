import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Page Not found</h1>
      <Link to="/">Back To Home </Link>
    </>
  );
};

export default NotFound;
