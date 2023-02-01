import { useContext } from "react";
import AddNewSpace from "../components/AddNewSpace";
import AddNewSpaceButton from "../components/AddNewSpaceButton";
import ChangeLanguageButtons from "../components/ChangeLanguageButtons";
import DeleteSpaces from "../components/DeleteSpaces";
import Home from "../components/Home";
import MainContext from "../context/Main/MainContext";

interface ContainerProps {
  logo: string
}

const HomeContainer: React.FC<ContainerProps> = ({ logo }) => {
  const { addSpaces, addButton, deleteSpaces, languageButtons } = useContext(MainContext);

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
    <Home logo={logo} />
  );
};

export default HomeContainer;
