import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import TermsPage from "./app/terms/TermsPage";
import UsPage from "./app/us/UsPage";
import PriceListPage from "./app/dashboard/pricelist/PriceListPage";
import HomePage from "./app/home/HomePage";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
  },
  {
    path: "/us",
    element: <UsPage />,
  },
  {
    path: "/pricelist",
    element: <PriceListPage />,
  },
]);

function App() {
  return (
    <MantineProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </MantineProvider>
  );
}

export default App;
