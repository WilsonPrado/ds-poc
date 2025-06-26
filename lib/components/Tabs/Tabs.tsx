import {
  Tabs as MuiTabs,
  Tab as MuiTab,
  TabsProps as MuiTabsProps,
  TabProps as MuiTabProps
} from '@mui/material'

export interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export const Tabs = (props: MuiTabsProps) => {
  return <MuiTabs {...props} />
}

export const Tab = (props: MuiTabProps) => {
  return <MuiTab {...props} />
}

export const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ds-tabpanel-${index}`}
      aria-labelledby={`ds-tab-${index}`}
      {...other}
    >
      {children}
    </div>
  )
}
