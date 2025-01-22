import ProviderWrapper from './state-management/providers/ProviderWrapper';
import HomePage from './state-management/components/HomePage';
import NavBar from './state-management/components/NavBar';


function App() {
  return (
          <ProviderWrapper>
            <NavBar/>
            <HomePage/>
          </ProviderWrapper>


  );
}

export default App;
