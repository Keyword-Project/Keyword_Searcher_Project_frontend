import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeywordInput from "components/feature/filter/KeywordInput";
import NotFound from "components/page/NotFound.tsx";
import SearchPage from "components/page/SearchPage";
import CategoryFilter from "components/feature/filter/CategoryFilter";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />}>
            <Route path="/keyword" element={<KeywordInput />}></Route>
            <Route path="/:id" element={<CategoryFilter />}></Route>
          </Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
