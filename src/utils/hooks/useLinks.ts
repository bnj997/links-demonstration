import { useState, useEffect } from "react";
import { ILinkType } from "../../types";
import { USER_LINKS } from "../mock/USER_LINKS";

export const useLinks = () => {
  const [links, setLinks] = useState<ILinkType | null>(null);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getLinks = async () => {
      try {
        const links = await Promise.resolve(USER_LINKS);
        setLinks(links);
      } catch (error) {
        setError("an error occured");
      }
    };
    getLinks();
  }, []);

  return { links, error };
};
