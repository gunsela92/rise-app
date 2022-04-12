import React, {useEffect} from "react";
import getMockData from "./Services";
import {getStorage, setStorage} from "./Utils/storageUtils";
import {useDispatch} from "react-redux";
import {setMockData} from "./redux/DataReducer/actions";
import Navbar from "./components/Navbar";
import CreateTodo from "./components/CreateTodo";
import Footer from "./components/Footer";
import Notification from "./components/Notification";
import MainContainer from "./components/MainContainer";

function App() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const res = await getMockData();
      if (res?.status === 200) {
        setStorage("mockData", res?.data);
        dispatch(setMockData(res?.data))
      }
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    const userStorageData = getStorage("mockData");
    if (userStorageData === null) {
      getData().then(r => console.log(r));
    } else {
      dispatch(setMockData(userStorageData));
    }
  }, []);

  return (
    <>
      <Navbar />
      <Notification />
      <CreateTodo />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;
