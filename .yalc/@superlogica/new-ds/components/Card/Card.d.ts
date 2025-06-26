import * as React from 'react';
import { CardContent, CardProps as MuiCardProps } from '@mui/material';
export type CardProps = MuiCardProps & {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    contentProps?: React.ComponentProps<typeof CardContent>;
};
export declare const Card: ({ title, actions, children, contentProps, ...props }: CardProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Card.d.ts.map