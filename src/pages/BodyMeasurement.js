import React, { useState } from 'react';

const BodyMeasurement = () => {
  const [measurements, setMeasurements] = useState({
    height: '',
    chest: '',
    waist: '',
    hips: '',
    inseam: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send measurements to the backend
    const response = await fetch('http://localhost:YOUR_API/body-measurements', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(measurements),
    });

    if (response.ok) {
      // Handle success (e.g., redirect to a profile or home page)
      console.log('Measurements submitted successfully');
    } else {
      // Handle failure
      console.log('Failed to submit measurements');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Your Body Measurements</h2>
      <input
        type="number"
        placeholder="Height (cm)"
        value={measurements.height}
        onChange={(e) => setMeasurements({ ...measurements, height: e.target.value })}
      />
      <input
        type="number"
        placeholder="Chest (cm)"
        value={measurements.chest}
        onChange={(e) => setMeasurements({ ...measurements, chest: e.target.value })}
      />
      <input
        type="number"
        placeholder="Waist (cm)"
        value={measurements.waist}
        onChange={(e) => setMeasurements({ ...measurements, waist: e.target.value })}
      />
      <input
        type="number"
        placeholder="Hips (cm)"
        value={measurements.hips}
        onChange={(e) => setMeasurements({ ...measurements, hips: e.target.value })}
      />
      <input
        type="number"
        placeholder="Inseam (cm)"
        value={measurements.inseam}
        onChange={(e) => setMeasurements({ ...measurements, inseam: e.target.value })}
      />
      <button type="submit">Submit Measurements</button>
    </form>
  );
};

export default BodyMeasurement;
