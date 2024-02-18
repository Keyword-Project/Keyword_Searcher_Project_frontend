import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link } from "react-router-dom";
export default function TabBox() {
  return (
    <>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title={<Link to="/category">카테고리 검색</Link>}>
       
        </Tab>
        <Tab eventKey="profile" title={<Link to="/keyword">키워드 검색</Link>}>
        
        </Tab>
      </Tabs>
    </>
  );
}
