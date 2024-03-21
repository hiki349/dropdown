import { FC } from "react";

export type DropdownItem = {
    value: string;
    label: string;
};

export interface DropdownProps {
    data: DropdownItem[];
    customSearchFunction?: (query: string) => Promise<DropdownItem[]>;
    customItem?: FC<DropdownItem>;
    customStyle?: React.CSSProperties;
}

export interface DropdownListProps {
    data: DropdownItem[];
    customItem?: FC<DropdownItem>;
    customStyle?: React.CSSProperties;
    onItemClick: (item: DropdownItem) => void;
    selectedItemValue?: string;
}
