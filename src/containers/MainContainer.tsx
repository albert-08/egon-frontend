import { useContext } from "react";
import AddNewSpace from "../components/AddNewSpace";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import ChangeLanguageButtons from "../components/ChangeLanguageButtons";
import DeleteSpaces from "../components/DeleteSpaces";
import Main from "../components/Main";
import MainContext from "../context/Main/MainContext";

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  const { addSpaces, main, addButton, deleteSpaces, languageButtons } = useContext(MainContext);

  if (main) {
    return <Main />
  }

  if (addSpaces) {
    return <AddNewSpace />
  }

  if (addButton) {
    return <AddNewSpaceButton />
  }

  if (deleteSpaces) {
    return <DeleteSpaces />
  }

  if (languageButtons) {
    return <ChangeLanguageButtons />
  }

  return (
    <Main />
  );
};

export default MainContainer;
