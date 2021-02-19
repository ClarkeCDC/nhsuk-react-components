import React from 'react';
import { Header } from '../src';
import { AsElementLink } from '../src/util/types/LinkTypes';

export const BasicHeader = () => (
  <Header>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
      <Header.NavItem href="/live-well">Live Well</Header.NavItem>
      <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
      <Header.NavItem href="/news">Health news</Header.NavItem>
      <Header.NavItem href="/service-search">Services near you</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const HeaderWithNavigation = () => (
  <Header>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
      <Header.NavItem href="/live-well">Live Well</Header.NavItem>
      <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
      <Header.NavItem href="/news">Health news</Header.NavItem>
      <Header.NavItem href="/service-search">Services near you</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const HeaderWithSearch = () => (
  <Header>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.Search />
      </Header.Content>
    </Header.Container>
  </Header>
);

export const HeaderWithLogo = () => (
  <Header>
    <Header.Container>
      <Header.Logo href="/" />
    </Header.Container>
  </Header>
);

export const TransactionalHeader = () => (
  <Header transactional>
    <Header.Container>
      <Header.Logo href="/" />
    </Header.Container>
  </Header>
);

export const TransactionalHeaderWithServiceName = () => (
  <Header transactional>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.ServiceName href="/">Register with a GP</Header.ServiceName>
    </Header.Container>
  </Header>
);

export const TransactionalHeaderWithALongServiceName = () => (
  <Header transactional>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.ServiceName href="/" long>
        Find out why your NHS data matters
      </Header.ServiceName>
    </Header.Container>
  </Header>
);

export const OrganisationalHeader = () => (
  <Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust">
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem>Your hospital visit</Header.NavItem>
      <Header.NavItem>Wards and departments</Header.NavItem>
      <Header.NavItem>Conditions and treatments</Header.NavItem>
      <Header.NavItem>Our people</Header.NavItem>
      <Header.NavItem>Our research</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const OrganisationalHeaderWithWhiteHeader = () => (
  <Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust" white>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.Nav>
      <Header.NavItem href="/" mobileOnly>
        Home
      </Header.NavItem>
      <Header.NavItem>Your hospital visit</Header.NavItem>
      <Header.NavItem>Wards and departments</Header.NavItem>
      <Header.NavItem>Conditions and treatments</Header.NavItem>
      <Header.NavItem>Our people</Header.NavItem>
      <Header.NavItem>Our research</Header.NavItem>
    </Header.Nav>
  </Header>
);

export const HeaderWithCustomNavItemComponent = () => {
  const customElement = (props: AsElementLink<HTMLDivElement>) => <div {...props} />;

  return (
    <Header
      orgName="Anytown Anyplace"
      orgSplit="Anywhere"
      orgDescriptor="NHS Foundation Trust"
      white
    >
      <Header.Container>
        <Header.Logo href="/" />
        <Header.Content>
          <Header.MenuToggle />
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem to="/" asElement={customElement}>
          Link to props
        </Header.NavItem>
        <Header.NavItem>Your hospital visit</Header.NavItem>
        <Header.NavItem>Wards and departments</Header.NavItem>
      </Header.Nav>
    </Header>
  );
};

export const HeaderWithCustomNavMenuCloseAndNavItemListComponent = () => (
  <Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust" white>
    <Header.Container>
      <Header.Logo href="/" />
      <Header.Content>
        <Header.MenuToggle />
        <Header.Search />
      </Header.Content>
    </Header.Container>
    <Header.NavContainer>
      <Header.NavTitle>
        <span>Menu</span>
        <Header.NavMenuClose />
      </Header.NavTitle>
      <Header.NavItemList>
        <Header.NavItem href="/" mobileOnly>
          Home
        </Header.NavItem>
        <Header.NavItem href="/conditions">Health A-Z</Header.NavItem>
        <Header.NavItem href="/live-well">Live Well</Header.NavItem>
        <Header.NavItem href="/social-care-and-support">Care and support</Header.NavItem>
        <Header.NavItem href="/news">Health news</Header.NavItem>
        <Header.NavItem href="/service-search">Services near you</Header.NavItem>
      </Header.NavItemList>
    </Header.NavContainer>
  </Header>
);

export default {
  title: 'Components/Header',
  component: Header,
};
