import {ComponentType, ReactElement, ReactNode} from "react";
import {NextPage} from "next";

type ChildContainerProps = {
    children: ReactNode;
};

export type Page<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode
    layout?: ComponentType
}