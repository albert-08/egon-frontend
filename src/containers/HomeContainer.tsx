import { useContext } from "react";
import AddNewSpace from "../components/AddNewSpace";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import ChangeLanguageButtons from "../components/ChangeLanguageButtons";
import EditSpacesButton from "../components/EditSpacesButton";
import Home from "../components/Home";
import MainContext from "../context/Main/MainContext";

interface ContainerProps {
  logo: string
}

const HomeContainer: React.FC<ContainerProps> = ({ logo }) => {
  const { addSpaces, addButton, deleteButton, languageButtons } = useContext(MainContext);

  if (addSpaces) {
    return <AddNewSpace />
  }

  if (addButton) {
    return <AddNewSpaceButton />
  }

  if (deleteButton) {
    return <EditSpacesButton />
  }

  if (languageButtons) {
    return <ChangeLanguageButtons />
  }

  return (
    <Home logo={logo} />
  );
};

export default HomeContainer;
