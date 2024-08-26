const Cell = ({ value, onChange }) => {
    const [fontSize, setFontSize] = useState('text-base');
    const [textAlign, setTextAlign] = useState('text-left');
  
    const handleChange = (e) => {
      const newValue = e.target.value;
      if (/^\d*$/.test(newValue)) { // Example validation for numeric values
        onChange(newValue);
      }
    };
  
    return (
      <div className={`border p-2 w-full h-full ${fontSize} ${textAlign}`}>
        <select onChange={(e) => setFontSize(e.target.value)} className="block mb-1">
          <option value="text-sm">Small</option>
          <option value="text-base">Medium</option>
          <option value="text-lg">Large</option>
        </select>
        <select onChange={(e) => setTextAlign(e.target.value)} className="block mb-1">
          <option value="text-left">Left</option>
          <option value="text-center">Center</option>
          <option value="text-right">Right</option>
        </select>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className="w-full h-full bg-white"
        />
      </div>
    );
  };
  