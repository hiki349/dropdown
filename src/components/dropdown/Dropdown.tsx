import style from './Dropdown.module.css'
import polygonSrc from '../../assets/polygon.svg'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { DropdownItem, DropdownProps } from './DropdownTypes';
import DropdownList from './DropdownList';

export const Dropdown: FC<DropdownProps> = ({
    data,
    customSearchFunction,
    customItem,
    customStyle
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState<DropdownItem[]>(data);
    const [selectedItem, setSelectedItem] = useState<DropdownItem>();

    const handleFilterData = async (searchQuery: string) => {
        if (customSearchFunction) {
            try {
                const resultOptions = await customSearchFunction(searchQuery);
                setFilteredOptions(resultOptions);
            } catch (error) {
                console.error("Error while searching options:", error);
            }
        } else {
            const filtered = data.filter(option =>
                option.label.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredOptions(filtered);
        }
    };

    useEffect(() => {
        if (searchValue.trim() !== '') {
            handleFilterData(searchValue);
        } else {
            setFilteredOptions(data);
        }
    }, [searchValue, data, customSearchFunction]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className={style.dropdown}>
            <div className={style.dropdown_option} onClick={() => setIsOpen(!isOpen)}>
                <span className={style.option_value}>
                    {selectedItem ? selectedItem.label : 'Choose one option'}
                </span>
                <img src={polygonSrc} alt="polygon" />
            </div>
            {isOpen && (
                <div className={style.dropdown_content}>
                    <input
                        className={style.dropdown_search}
                        onChange={handleInputChange}
                        placeholder="Search..."
                        type="text"
                    />
                    <DropdownList
                        data={filteredOptions}
                        customItem={customItem}
                        customStyle={customStyle}
                        onItemClick={item => setSelectedItem(item)}
                        selectedItemValue={selectedItem?.value}
                    />
                </div>
            )}
        </div>
    );
};