import { useState } from 'react';

const AddressModal = ({ onClose, onSave, address }) => {
  const [location, setLocation] = useState(address.location || '');
  const [phone, setPhone] = useState(address.phone || '');
  const [email, setEmail] = useState(address.email || '');

  const handleSave = () => {
    onSave({ location, phone, email });
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4"> {address ? 'Edit' : 'Add'} Address</h2>
        <input
          type="text"
          placeholder="Location"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded p-2 mb-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="bg-lime-500 text-white rounded-full py-2 px-4 mr-2" onClick={handleSave}>
            Save
          </button>
          <button className="bg-gray-300 text-black rounded-full py-2 px-4" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
