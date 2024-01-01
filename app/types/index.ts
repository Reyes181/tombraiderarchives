export type SideNavItem = {
    title: string;
    path: string;
    img?: string;
    color?: string;
    subMenu?: boolean;
    subMenuItems?: SideNavItem[];
}

export type MenuItemWithSubMenuProps = {
    item: SideNavItem;
    toggleOpen: () => void;
}