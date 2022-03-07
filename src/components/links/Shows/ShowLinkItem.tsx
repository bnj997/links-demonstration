import React from "react";
import FlexWrapper from "../../layouts/wrappers/FlexWrapper/FlexWrapper";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow.svg";
import { ShowLinkContainer } from "./ShowLinkItem.styles";
import Title from "../../text/Title/Title";
import Subtitle from "../../text/Subtitle/Subtitle";
import { IShowLinkItemType } from "../../../types";

interface IShowLinkItemProps {
  event: IShowLinkItemType;
}

const ShowsItemLink: React.FC<IShowLinkItemProps> = ({ event }) => {
  const { url, date, location, isSoldOut } = event;

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
          <ArrowIcon style={{ transform: "rotate(270deg)" }} />
        )}
      </FlexWrapper>
    </ShowLinkContainer>
  );
};

export default ShowsItemLink;
