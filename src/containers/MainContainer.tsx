import { useContext } from "react";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import ChangeLanguageButtons from "../components/ChangeLanguageButtons";
import EditSpacesButton from "../components/EditSpacesButton";
import Main from "../components/Main";
import MainContext from "../context/Main/MainContext";

interface ContainerProps { }

const MainContainer: React.FC<ContainerProps> = () => {
  const { main, addButton, editButton, languageButtons } = useContext(MainContext);

  if (main) {
    return <Main />
  }

  if (addButton) {
    return <AddNewSpaceButton />
  }

  if (editButton) {
    return <EditSpacesButton />
  }

  if (languageButtons) {
    return <ChangeLanguageButtons />
  }

  return (
    <Main />
  );
};

export default MainContainer;
