export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div 
        className="bg-slate-300 border border-blue-800 p-5 m-5 mb-2 ml-10 cursor-pointer"
        onClick={() => onSelect(name)} // Handle click to notify the parent
      >
        <div className="font-semibold">{name}</div>
        <div className="text-gray-800">Buy {quantity} in {category}</div>
      </div>
    );
  }
  
