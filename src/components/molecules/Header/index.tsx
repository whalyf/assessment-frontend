import { LogoWithSearchBar } from "../../atoms/LogoWithSearchBar";
import { Sections } from "../../atoms/Sections";
import { TopBlackBarInfos } from "../../atoms/TopBlackBarInfos";
import { WrapperHeader } from "./styles";

export const Header = () => {
  return (
    <WrapperHeader>
      <TopBlackBarInfos />
      <LogoWithSearchBar />
      <Sections />
    </WrapperHeader>
  );
};
