/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-left header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}>
        {/*begin::Header Nav*/}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>

            {/*Classic submenu*/}
            {/*begin::1 Level*/}
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/auths')}`}>
                <NavLink className="menu-link menu-toggle" to="/google-material">
                    <span className="menu-text">Todos</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        {/*begin::2 Level*/}
                        <li
                            className={`menu-item menu-item-submenu ${getMenuItemActive('/auths')}`}
                            data-menu-toggle="hover"
                            aria-haspopup="true"
                        >
                            <NavLink className="menu-link menu-toggle" to="/auths">
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book.svg")} />
                                </span>
                                <span className="menu-text">
                                    T??i kho???n
                                </span>
                                <i className="menu-arrow" />
                            </NavLink>
                            <div className={`menu-submenu menu-submenu-classic menu-submenu-right`}>
                                <ul className="menu-subnav">
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/auths')}`}>
                                        <NavLink className="menu-link" to="/auths">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Danh s??ch</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                    {/*begin::3 Level*/}
                                    <li className={`menu-item ${getMenuItemActive('/todos/new')}`}>
                                        <NavLink className="menu-link" to="/todos/new">
                                            <i className="menu-bullet menu-bullet-dot"><span /></i>
                                            <span className="menu-text">Th??m m???i</span>
                                        </NavLink>
                                    </li>
                                    {/*end::3 Level*/}
                                </ul>
                            </div>
                        </li>
                        {/*end::2 Level*/}
                    </ul>
                </div>
            </li>
            {/*end::1 Level*/}
        </ul>
        {/*end::Header Nav*/}
    </div>;
}
