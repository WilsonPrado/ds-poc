import { TabsProps as MuiTabsProps, TabProps as MuiTabProps } from '@mui/material';
export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export declare const Tabs: (props: MuiTabsProps) => import("react/jsx-runtime").JSX.Element;
export declare const Tab: (props: MuiTabProps) => import("react/jsx-runtime").JSX.Element;
export declare const TabPanel: ({ children, value, index, ...other }: TabPanelProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tabs.d.ts.map