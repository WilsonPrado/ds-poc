import {
  Autocomplete,
  AutocompleteProps,
  TextField,
  CircularProgress,
  InputAdornment
} from '@mui/material'
import React from 'react'

export type SearchAutocompleteProps<T> = Omit<
  AutocompleteProps<T, false, false, false>,
  'renderInput'
> & {
  label?: string
  popupIcon?: boolean
  loading?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: 'outlined' | 'standard' | 'filled'
}

export function SearchAutocomplete<T>({
  label = 'Buscar...',
  loading = false,
  startIcon,
  endIcon,
  variant = 'outlined',
  ...props
}: SearchAutocompleteProps<T>) {
  return (
    <Autocomplete
      fullWidth
      loading={loading}
      freeSolo
      popupIcon={null}
      disableClearable={false}
      {...props}
      renderInput={(params) => {
        const { InputProps, ...restParams } = params
        const hasValue =
          typeof params.inputProps?.value === 'string' &&
          params.inputProps?.value.trim() !== ''
        return (
          <TextField
            {...restParams}
            label={label}
            variant={variant}
            sx={{
              '& .MuiAutocomplete-popupIndicator': {
                display: 'none'
              },
              '& .MuiOutlinedInput-root': {
                paddingRight: '16px !important'
              }
            }}
            InputProps={{
              ...InputProps,
              startAdornment: startIcon ? (
                <InputAdornment position="start">{startIcon}</InputAdornment>
              ) : undefined,
              endAdornment: (
                <>
                  {loading && (
                    <InputAdornment position="end">
                      <CircularProgress color="inherit" size={20} />
                    </InputAdornment>
                  )}
                  {endIcon && (
                    <InputAdornment position="end" style={{ marginRight: hasValue ? 20 : 0 }}>
                      {endIcon}
                    </InputAdornment>
                  )}
                  {InputProps?.endAdornment}
                </>
              )
            }}
          />
        )
      }}
    />
  )
}
