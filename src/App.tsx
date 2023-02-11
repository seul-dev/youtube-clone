import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      hello!
      {/* navbar */}
      <Outlet />
    </div>
  );
}

export default App;
