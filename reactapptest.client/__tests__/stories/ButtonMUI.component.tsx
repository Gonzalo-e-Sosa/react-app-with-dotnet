import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

// Only include variant, size, and color
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color' | 'onClick'>;

// Use all except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
    label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => (
    <MuiButton {...rest}>{label}</MuiButton>
);