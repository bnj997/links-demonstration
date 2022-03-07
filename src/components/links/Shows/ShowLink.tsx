import React from "react";
import LinkWrapper from "../../layouts/wrappers/LinkWrapper/LinkWrapper";
import ShowItemLink from "./ShowLinkItem";
import { ScrollableMenu, IconContainer } from "./ShowLink.styles";
import { ReactComponent as SongkickIcon } from "../../../assets/icons/by-songkick-wordmark.svg";
import DropdownWrapper from "../../layouts/wrappers/DropdownWrapper/DropdownWrapper";
import { IShowLinkItemType } from "../../../types";

interface IShowLinkProps {
  events: IShowLinkItemType[];
  onClick: () => void;
  isOpen: boolean;
}

const ShowsLink: React.FC<IShowLinkProps> = ({ events, onClick, isOpen }) => {
  return (
    <div>
      <LinkWrapper title={"Shows"} onClick={onClick} />
      {isOpen && (
        <DropdownWrapper>
          <ScrollableMenu>
            {events.map((event, i) => {
              return <ShowItemLink key={i} event={event} />;
            })}
          </ScrollableMenu>
          <IconContainer>
            <SongkickIcon style={{ transform: "scale(0.75)" }} />
          </IconContainer>
        </DropdownWrapper>
      )}
    </div>
  );
};

export default ShowsLink;
