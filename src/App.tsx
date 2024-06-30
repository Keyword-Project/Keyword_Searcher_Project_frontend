import "bootstrap/dist/css/bootstrap.min.css";
import {  createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import SearchPage from "components/pages/SearchPage";
import Layout from "Layout";
import CategoryList from "components/feature/filter/CategoryList";
import NotFound from "components/pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
      <SearchPage />
    </Layout>,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: async () => redirect('/categories'),
    },
    {
      path: "categories",
      element: <CategoryList />,
      children : [
        {
          path: ":categoryId",
          element: <></>,
        }
      ]
    },
    {
      path: "keyword",
      element: <KeywordInput />,
    },
  ],
  },
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
