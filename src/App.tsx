import { FC } from 'react';
import { Dropdown } from './components';
import { DropdownItem } from './components/dropdown/DropdownTypes';

const App: FC = () => {

    const data1: DropdownItem[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];

    const data2: DropdownItem[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];
    const CustomItem: FC<DropdownItem> = ({ label }) => (
        <div style={{ color: 'blue' }}>{label}</div>
    );

    const data3: DropdownItem[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];
    const customStyle = {
        backgroundColor: 'lightgray',
        border: '1px solid gray',
    };

    const data4: DropdownItem[] = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];
    const customSearchFunction = (query: string): Promise<DropdownItem[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const filteredData = data4.filter((item) =>
                    item.label.toLowerCase().includes(query.toLowerCase())
                );
                resolve(filteredData);
            }, 1000);
        });
    };

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
            <div>
                <h2>Dropdownt with data</h2>
                <Dropdown data={data1} />
            </div>
            <div>
                <h2>Dropdownt with data and custom element</h2>
                <Dropdown data={data2} customItem={CustomItem} />
            </div>
            <div>
                <h2>Dropdownt with data and custom styles</h2>
                <Dropdown data={data3} customStyle={customStyle} />
            </div>
            <div>
                <h2>Dropdownt with data and custom async filter</h2>
                <Dropdown data={data4} customSearchFunction={customSearchFunction} />
            </div>
        </div>
    );
};

export default App;
