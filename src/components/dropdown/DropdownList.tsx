import { FC } from 'react';
import style from './Dropdown.module.css';
import { DropdownListProps } from './DropdownTypes';

const DropdownList: FC<DropdownListProps> = ({
    data,
    onItemClick,
    customItem,
    customStyle,
    selectedItemValue
}) => (
    <>
        {data.map(item => {
            const isActive = selectedItemValue === item.value;
            return (
                <div
                    className={`${style.dropdown_item} ${isActive && !customStyle ? style.dropdown_item__active : ''
                        }`}
                    style={customStyle && isActive ? customStyle : undefined}
                    onClick={() => onItemClick(item)}
                    key={item.value}
                >
                    {customItem ? customItem(item) : item.label}
                </div>
            );
        })}
    </>
)

export default DropdownList;