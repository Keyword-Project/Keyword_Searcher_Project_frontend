import "bootstrap/dist/css/bootstrap.min.css";

import TabBox from "./component/feature/Tab/TabBox.tsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemCategoryPage from "./component/feature/page/ItemCategoryPage.tsx";
import ItemKeywordPage from "./component/feature/page/ItemKeywordPage.tsx";
import NotFound from "./component/feature/page/NotFound.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <TabBox />
        </div>
        <Routes>
          <Route path="/category" element={<ItemCategoryPage />}></Route>
          <Route path="/keyword" element={<ItemKeywordPage />}></Route>
          <Route
            path="/"
            element={<p>여긴 홈페이지 뭐 꾸며야하는거지??</p>}
          ></Route>
          {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
