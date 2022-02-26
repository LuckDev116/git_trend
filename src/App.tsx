import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from "react-query";

import { DarkTheme } from './theme';
import { Developers } from "./pages/Developers";
import { Repositories } from "./pages/Repositories"
import { CategoriesContext } from "./context/CategoriesContext";

const queryClient = new QueryClient();

function App() {

  const [value, setValue] = React.useState("today");
  const range = "Date range:";
  const date_context = React.useMemo(
		() => ({
			range,
			value,
			setValue,
		}),
		[value]
	);

  return (
    <CategoriesContext.Provider value={date_context}>
      <ThemeProvider theme = {DarkTheme} >
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<Repositories />} />
              <Route path="/developers" element={<Developers />} />
            </Routes>
          </Router>  
        </QueryClientProvider>
      </ThemeProvider>
    </CategoriesContext.Provider>
  );
}

export default App;
