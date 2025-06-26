import * as React from 'react';
import { DialogProps as MuiDialogProps } from '@mui/material';
export type DialogProps = MuiDialogProps & {
    title?: React.ReactNode;
    actions?: React.ReactNode;
};
export declare const Dialog: ({ title, actions, children, ...props }: DialogProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Dialog.d.ts.map