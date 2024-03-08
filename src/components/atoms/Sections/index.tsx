import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WrapperSections } from "./styles";

export const Sections = () => {
  const [sections, setSections] = useState<
    { id: number; name: string; path: string }[]
  >([]);

  const apiUrl = "http://localhost:8888/api/V1/categories";

  const handleLoadList = useCallback(async () => {
    const response = await axios.get(`${apiUrl}/list`);
    setSections(response.data.items);
  }, []);

  useEffect(() => {
    handleLoadList();
  }, [handleLoadList]);

  return (
    <WrapperSections>
      <Link to="/">
        <span>Página Inicial</span>
      </Link>

      {sections &&
        sections.length > 0 &&
        sections.map((section) => (
          <Link to={`/produtos/${section.path}`} key={section.id}>
            <span>{section.name}</span>
          </Link>
        ))}

      <Link to="/contato">
        <span>Contato</span>
      </Link>
    </WrapperSections>
  );
};
