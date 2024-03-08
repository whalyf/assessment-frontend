import { Footer } from "../../components/atoms/Footer";
import { SidebarLeft } from "../../components/molecules/SidebarLeft";
import { HeroCarrousel, RightContent, WrapperHome } from "./styles";

export const Home = () => {
  return (
    <>
      <WrapperHome>
        <SidebarLeft />
        <RightContent>
          <HeroCarrousel />
          <main>
            <span>Seja bem-vindo!</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              reiciendis dolores officia sed sunt quo, dolorum temporibus
              accusamus exercitationem? Commodi consectetur expedita ratione ut
              quod veniam numquam dicta quia voluptatibus! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Animi reiciendis dolores
              officia sed sunt quo, dolorum temporibus accusamus exercitationem?
              Commodi consectetur expedita ratione ut quod veniam numquam dicta
              quia voluptatibus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi reiciendis dolores officia sed sunt quo,
              dolorum temporibus accusamus exercitationem? Commodi consectetur
              expedita ratione ut quod veniam numquam dicta quia voluptatibus!
            </p>
          </main>
        </RightContent>
      </WrapperHome>
      <Footer />
    </>
  );
};
