import styled from "styled-components";
import UpArrow from "assets/icons/upArrow.svg?react";
import { useState } from "react";

interface DropdownProps {
  List: string[];
  isFetching: boolean;
}

const StyledFieldset = styled.fieldset`
  position: relative;
  display: flex;
  padding: 0;
  margin: 0;
  border: 2px solid var(--Gray500);
  border: 0;
  width: 135px;
`;

const StyledSelectArea = styled.div`
  position: relative;
`;

const StyledArrowIcon = styled(UpArrow)`
  position: absolute;
  top: 12px;
  right: 8px;
  display: block;
  padding: 0;
  transition: all ease 0.5s;
  transform: ${(props) => (props.showCategory == true ? "rotate(180deg)" : "")};
`;

const StyledSelect = styled.select`
  position: relative;
  width: 9rem;
  height: 2.5625rem;
  font-size: 1rem;
  padding: 0.5rem 0.625rem 0.625rem 0.875rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0.625rem;
  border: 2px solid var(--Gray500);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: 0px 4px 10px 0px rgba(34, 39, 47, 0.1);
`;

export default function Dropdown({ isFetching }: DropdownProps) {
  const [showCategory, setShowCategory] = useState<boolean>(false);

  return (
    <>
      <StyledFieldset onClick={() => setShowCategory(!showCategory)}>
        <StyledSelectArea>
          <StyledSelect disabled={isFetching}>
            <option value="direct">직접입력</option>;<option value="30">30개</option>;
            <option value="50">50개</option>;<option value="80">80개</option>;
            <option value="100">100개</option>;
          </StyledSelect>
          <StyledArrowIcon width="18" height="18" showCategory={showCategory} />
        </StyledSelectArea>
      </StyledFieldset>
    </>
  );
}
