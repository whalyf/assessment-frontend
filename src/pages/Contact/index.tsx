import { Footer } from "../../components/atoms/Footer";
import { WrapperContact } from "./styles";

export const Contact = () => {
  return (
    <>
      <WrapperContact>
        <span>
          email: <b>contato@webjump.com</b>
        </span>
        <span>
          telefone: <b>(99) 99999-9999</b>
        </span>
      </WrapperContact>
      <Footer />
    </>
  );
};
