import { useState } from "react";
import SearchDropdownWrap from "./SearchDropdownWrap";
import styled from "styled-components";
import UpArrow from "assets/icons/upArrow.svg?react";
import { DropdownProps } from "type/dropdown";

const DropdownSeletor = styled.div<{ dropdownVisibility: boolean }>`
  border-radius: 0.625rem;
  width: 8rem;
  position: relative;
  height: 2.5rem;
  border-color: ${(props) =>
    props.dropdownVisibility == true ? "var(--Orange500)" : "var(--Gray500)"};
  border-style: solid;
  line-height: 2.5rem;
  border-width: 2px;
  padding-right: 2rem;
  padding-left: 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const StyledArrowIcon = styled(UpArrow)<{ dropdownVisibility: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  display: block;
  padding: 0;
  transition: all ease 0.4s;
  transform: ${(props) =>
    props.dropdownVisibility == true ? "rotate(180deg)" : ""};
`;

const StyledUl = styled.ul`
  width: 100%;
  border: 2px solid var(--Orange500);
  border-radius: 10px;
  padding-left: 1rem;
`;

const StyledLi = styled.li`
  list-style-type: none;
  &:hover {
    font-weight: bold;
    cursor: pointer;
    color: var(--Orange500);
  }
`;

const SearchDropdown = ({
  isFetching,
  setSearchSize,
  setIsInputDisable,
  domain,
  setDomain,
}: DropdownProps) => {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [selectedItem, setSelectedItem] = useState("직접 입력");
  const List = ["직접 입력", "30", "50", "70", "100"];

  return (
    <div>
      <DropdownSeletor
        dropdownVisibility={dropdownVisibility}
        onClick={() => {
          if (!isFetching) {
            setDropdownVisibility(!dropdownVisibility);
          }
        }}
      >
        {selectedItem}
        <StyledArrowIcon
          width="18"
          height="18"
          dropdownVisibility={dropdownVisibility}
        />
      </DropdownSeletor>
      <SearchDropdownWrap visibility={dropdownVisibility}>
        <StyledUl>
          {List.map((item, idx) => {
            return (
              <StyledLi
                onClick={() => {
                  if (item !== "직접 입력") {
                    setIsInputDisable(true);
                    setDomain(item);
                    setSearchSize(domain);
                  } else if (item === "직접 입력") {
                    setIsInputDisable(false);
                    setDomain("");
                  }
                  setSelectedItem(item);
                  setDropdownVisibility(!dropdownVisibility);
                }}
                key={idx}
              >
                {item}
              </StyledLi>
            );
          })}
        </StyledUl>
      </SearchDropdownWrap>
    </div>
  );
};

export default SearchDropdown;
