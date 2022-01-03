import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './components';
import Home from './containers/Home';

const App = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="/*" element={<Home />} />
  </Routes>
);

export default App;
