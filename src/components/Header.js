import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import { Devices } from "../core/Devices";
import { Theme } from "../core/Theme";
import { Logo } from "./Logo";

const HeaderContainer = styled.section`
  top: 0;
  left: 0;
  display: block;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
`;
const Left = styled.div`
  ${Devices.medium} {
    flex: 1;
  }
`;
const Center = styled.div``;
const Right = styled.div`
  margin-left: auto;
  ${Devices.medium} {
    flex: 1;
  }
`;
const MainNavWrapper = styled.div`
  position: fixed;
  z-index: 100;
  background-color: ${Theme.menu_bg};
  box-sizing: border-box;
  width: 100%;
  ${Devices.medium} {
    position: relative;
  }
`;
const MainNavBar = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 0 10px;
  height: 50px;
  ___CSS_1___ {
    height: 70px;
    box-shadow: none;
  }
`;
const CenterLinks = styled(Center)`
  display: none;
  ${Devices.medium} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CenterLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  color: ${Theme.links};
  ___CSS_1___ {
    padding-left: 25px;
    padding-right: 25px;
    font-size: 12px;
  }
  ___CSS_2___ {
    font-size: 14px;
  }
  ___CSS_3___ {
    font-size: 16px;
  }
`;
const CenterLinkWithBadge = styled(CenterLink)`
  &::after {
    content: "${(props) => props.badgeText}";
    top: 0;
    right: 0;
    color: ${Theme.menu_badge_txt};
    background-color: ${Theme.menu_badge_bg};
    position: absolute;
    padding: 2px 3px;
    font-size: 8px;
    border-radius: 20px;
  }
`;
const LogoContainer = styled.div`
  width: 170px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledLogo = styled(Logo)`
  ${Devices.medium} {
    margin-bottom: 6px;
  }
`;
const MobileNavContainer = styled(Right)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MobileMenuIcon = styled.div`
  width: 32px;
  height: 100%;
  position: relative;
  ${Devices.medium} {
    display: none;
  }
  span {
    display: flex;
    position: absolute;
    height: 4px;
    width: 100%;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    &:nth-child(1) {
      top: 12px;
      background: linear-gradient(to bottom, #a3c839 0, #9fc63a 100%);
    }
    &:nth-child(2) {
      top: 22px;
      background: linear-gradient(to bottom, #8dbb3d 0, #86b73e 100%);
    }
    &:nth-child(3) {
      top: 22px;
      background: linear-gradient(to bottom, #8dbb3d 0, #86b73e 100%);
    }
    &:nth-child(4) {
      top: 32px;
      background: linear-gradient(to bottom, #72ac42 0, #6ea943 100%);
    }
  }
`;

export const Header = (props) => {
  return (
    <HeaderContainer>
      <MainNavWrapper>
        <MainNavBar>
          <Left>
            <LogoContainer>
              <StyledLogo width="170px" height="30px" />
            </LogoContainer>
          </Left>
          <CenterLinks>
            <CenterLink><Link to="/">Projects</Link></CenterLink>
            <CenterLink><Link to="cv">Curriculum</Link></CenterLink>
            <CenterLinkWithBadge
              badgeText="QUIZ"
              colour="#2a2a2a"
              background="#ffc800"
            >
              Am I a good fit for your project?
            </CenterLinkWithBadge>
          </CenterLinks>
          <MobileNavContainer>
            <MobileMenuIcon>
              <span />
              <span />
              <span />
              <span />
            </MobileMenuIcon>
          </MobileNavContainer>
        </MainNavBar>
      </MainNavWrapper>
    </HeaderContainer>
  );
};

export default Header;
