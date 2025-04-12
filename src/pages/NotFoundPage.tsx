import { Link } from 'react-router-dom';
import 'bulma/css/bulma.css';

const NotFoundPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">Page not found</h1>
      <p className="subtitle">
        The page you are looking for does not exist. Please check the URL or
        return to the homepage.
      </p>
      <Link to="/" className="button is-primary">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFoundPage;
