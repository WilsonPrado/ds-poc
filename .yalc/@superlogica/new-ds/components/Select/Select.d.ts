import { SelectProps as MuiSelectProps } from '@mui/material';
export type SelectOption = {
    label: string;
    value: string | number;
};
export type SelectProps = MuiSelectProps & {
    label?: string;
    options?: SelectOption[];
    id?: string;
};
export declare const Select: ({ label, options, id, children, ...props }: SelectProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Select.d.ts.map