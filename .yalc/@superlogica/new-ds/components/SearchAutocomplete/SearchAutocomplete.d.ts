import { AutocompleteProps } from '@mui/material';
import React from 'react';
export type SearchAutocompleteProps<T> = Omit<AutocompleteProps<T, false, false, false>, 'renderInput'> & {
    label?: string;
    popupIcon?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    variant?: 'outlined' | 'standard' | 'filled';
};
export declare function SearchAutocomplete<T>({ label, loading, startIcon, endIcon, variant, ...props }: SearchAutocompleteProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SearchAutocomplete.d.ts.map