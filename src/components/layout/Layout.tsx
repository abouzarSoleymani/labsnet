import {ChildContainerProps} from "@/types/types";
import {AppHeader} from "@/components/layout/AppHeader";
import {AppFooter} from "@/components/layout/AppFooter";
import React from "react";

export const Layout = ({children}: ChildContainerProps) => {
    return (
        <React.Fragment>
            <AppHeader/>
            {children}
            <AppFooter/>
        </React.Fragment>
    )
}