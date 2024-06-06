export interface Step {
    stepNumber: number;
    name: string;
    hasError: boolean;
    icon1: JSX.Element | null;
    icon2: JSX.Element | null;
    quantity: number | null;
}