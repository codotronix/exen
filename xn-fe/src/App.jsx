import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import routes from './routes';
import Header from './shared/components/header/Header';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <>
              <Header />
              <route.component
                {...route.props}
              />
              </>
            }
          />
        ))}
        {/* Fallback route for unmatched paths */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;