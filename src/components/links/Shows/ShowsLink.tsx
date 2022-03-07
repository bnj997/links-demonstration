import React from "react";
import { IShowsLinkType } from "../../../types";
import LinkWrapper from "../../layouts/wrappers/LinkWrapper/LinkWrapper";
import ShowItemLink from "./ShowItemLink";
import { ScrollableMenu, IconContainer } from "./ShowsLink.styles";
import { ReactComponent as SongkickIcon } from "../../../assets/icons/by-songkick-wordmark.svg";
import DropdownWrapper from "../../layouts/wrappers/DropdownWrapper/DropdownWrapper";

interface IShowsLinkProps {
  items: IShowsLinkType[];
  onClick: () => void;
  isOpen: boolean;
}

const ShowsLink: React.FC<IShowsLinkProps> = ({ items, onClick, isOpen }) => {
  return (
    <div>
      <LinkWrapper title={"Shows"} onClick={onClick} />
      {isOpen && (
        <DropdownWrapper>
          <ScrollableMenu>
            {items.map((shows, i) => {
              return <ShowItemLink key={i} data={shows} />;
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
