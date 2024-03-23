import { useTitle } from "ahooks";
import { Flex } from "antd";
import "./App.css";

function App() {
    useTitle("使用 ahooks 修改标题");

    return <Flex justify="center">Hello Demo</Flex>;
}

export default App;
