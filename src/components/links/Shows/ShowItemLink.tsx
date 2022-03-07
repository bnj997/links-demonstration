import React from "react";
import FlexWrapper from "../../layouts/wrappers/FlexWrapper/FlexWrapper";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ShowLinkContainer } from "./ShowItemLink.styles";
import Title from "../../text/Title/Title";
import Subtitle from "../../text/Subtitle/Subtitle";
import { IShowsLinkType } from "../../../types";

interface IShowsItemLinkProps {
  data: IShowsLinkType;
}

const ShowsItemLink: React.FC<IShowsItemLinkProps> = ({ data }) => {
  const { url, date, location, isSoldOut } = data;

  return (
    <ShowLinkContainer
      onClick={() => window.open(url)}
      role="link"
      aria-label="button"
    >
      <FlexWrapper direction="horizontal" justify="space-between">
        <div>
          <Title text={date} />
          <Subtitle text={location} />
        </div>
        {isSoldOut ? (
          <Subtitle text="Sold out" />
        ) : (
          <ArrowIcon style={{ transform: "rotate(270deg)" }} role="link" />
        )}
      </FlexWrapper>
    </ShowLinkContainer>
  );
};

export default ShowsItemLink;
