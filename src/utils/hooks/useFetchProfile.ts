import { useState, useEffect } from "react";
import { IProfileType } from "../../types";
import { USER_PROFILE } from "../mock/USER_PROFILE";

export const useFetchProfile = () => {
  const [data, setData] = useState<IProfileType | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await Promise.resolve(USER_PROFILE);
        setData(response);
      } catch (error) {
        setError("an error occured");
      }
    };
    getProfile();
  }, []);

  return { data, error };
};
