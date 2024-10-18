
// import React, { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { handleBookingSubmit } from '../../server/booking/booking';
// import styles from './NewBookingForm.module.css';
// import GoogleMapComponent from '../Map/map';

// const locations = [
//   'Pune Station', 'MG Road', 'Kothrud', 'Hadapsar', 'Baner',
//   'Aundh', 'Viman Nagar', 'Pimple Saudagar', 'Kharadi',
//   'Wakad', 'Hinjewadi', 'Shivaji Nagar', 'Dhayari',
//   'Kalyani Nagar', 'Yerwada', 'Sinhagad Road'
// ];

// const vehicleTypes = ['Car', 'Auto', 'Bus', 'Taxi'];

// const costEstimates = {
//   Car: 50, Auto: 30, Bus: 20, Taxi: 40,
// };

// const NewBookingForm = ({ userId }) => {
//   const [formData, setFormData] = useState({
//     pickupLocation: '', dropOffLocation: '', date: '', time: '', vehicleType: '',
//   });
//   const [estimatedCost, setEstimatedCost] = useState(0);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     if (
//       name === 'pickupLocation' ||
//       name === 'dropOffLocation' ||
//       name === 'vehicleType'
//     ) {
//       calculateEstimatedCost(
//         formData.pickupLocation,
//         formData.dropOffLocation,
//         value
//       );
//     }
//   };

//   const clearData = () => {
//     setFormData({
//       pickupLocation: '', dropOffLocation: '', date: '', time: '', vehicleType: '',
//     });
//     setEstimatedCost(0);
//   };

//   const calculateEstimatedCost = (pickup, dropOff, vehicle) => {
//     if (pickup && dropOff && vehicle) {
//       const cost = costEstimates[vehicle] || 0;
//       setEstimatedCost(cost);
//     } else {
//       setEstimatedCost(0);
//     }
//   };

//   useEffect(() => {
//     const today = new Date().toISOString().split('T')[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       date: today,
//     }));
//     calculateEstimatedCost(
//       formData.pickupLocation,
//       formData.dropOffLocation,
//       formData.vehicleType
//     );
//   }, [formData]);

//   return (
//     <div className={styles.container}>
//       <GoogleMapComponent
//         pickupLocation={formData.pickupLocation}
//         dropOffLocation={formData.dropOffLocation}
//       />
//       <form
//         onSubmit={(e) => {
//           handleBookingSubmit(e, formData, clearData, estimatedCost, userId);
//         }}
//         className={styles.newBookingForm}
//       >
//         <ToastContainer />
//         <h3 className={styles.formHeader}>New Booking</h3>
//         <div className={styles.formGroup}>
//           <label>Pickup Location:</label>
//           <select
//             name="pickupLocation"
//             value={formData.pickupLocation}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>Select pickup location</option>
//             {locations.map((location, index) => (
//               <option key={index} value={location}>{location}</option>
//             ))}
//           </select>
//         </div>
//         <div className={styles.formGroup}>
//           <label>Drop-off Location:</label>
//           <select
//             name="dropOffLocation"
//             value={formData.dropOffLocation}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>Select drop-off location</option>
//             {locations.map((location, index) => (
//               <option key={index} value={location}>{location}</option>
//             ))}
//           </select>
//         </div>
//         <div className={styles.formGroup}>
//           <label>Date:</label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             min={new Date().toISOString().split('T')[0]}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label>Time:</label>
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             min={`${new Date().getHours() + 1 < 10 ? '0' : ''}${new Date().getHours() + 1}:00`}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label>Vehicle Type:</label>
//           <select
//             name="vehicleType"
//             value={formData.vehicleType}
//             onChange={handleChange}
//             required
//           >
//             <option value="" disabled>Select vehicle type</option>
//             {vehicleTypes.map((type, index) => (
//               <option key={index} value={type}>{type}</option>
//             ))}
//           </select>
//         </div>
//         <div className={styles.formGroup}>
//           <h4>Estimated Cost: ₹{estimatedCost}</h4>
//         </div>
//         <div className={styles.formGroup}>
//           <button type="submit" className={styles.submitButton}>Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default NewBookingForm;




import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handleBookingSubmit } from '../../server/booking/booking';
import styles from './NewBookingForm.module.css';
import GoogleMapComponent from '../Map/map';

const locations = {
  'Pune Station': { lat: 18.5196, lng: 73.8553 },
  'MG Road': { lat: 18.5204, lng: 73.8567 },
  'Kothrud': { lat: 18.4841, lng: 73.8213 },
  'Hadapsar': { lat: 18.5000, lng: 73.9234 },
  'Baner': { lat: 18.5584, lng: 73.7622 },
  'Aundh': { lat: 18.5701, lng: 73.8010 },
  'Viman Nagar': { lat: 18.5700, lng: 73.9280 },
  'Pimple Saudagar': { lat: 18.5942, lng: 73.7901 },
  'Kharadi': { lat: 18.5547, lng: 73.9278 },
  'Wakad': { lat: 18.5862, lng: 73.7957 },
  'Hinjewadi': { lat: 18.5860, lng: 73.7071 },
  'Shivaji Nagar': { lat: 18.5179, lng: 73.8554 },
  'Dhayari': { lat: 18.4754, lng: 73.8020 },
  'Kalyani Nagar': { lat: 18.5540, lng: 73.9081 },
  'Yerwada': { lat: 18.5523, lng: 73.9200 },
  'Sinhagad Road': { lat: 18.4751, lng: 73.8125 },
};

const vehicleTypes = ['Car', 'Auto', 'Bus', 'Taxi'];

const costPerKm = {
  Car: 50,
  Auto: 30,
  Bus: 20,
  Taxi: 40,
};

const haversineDistance = (coords1, coords2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371; // Radius of the Earth in km

  const dLat = toRad(coords2.lat - coords1.lat);
  const dLng = toRad(coords2.lng - coords1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coords1.lat)) * Math.cos(toRad(coords2.lat)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

const NewBookingForm = ({ userId }) => {
  const [formData, setFormData] = useState({
    pickupLocation: '', dropOffLocation: '', date: '', time: '', vehicleType: '',
  });
  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (
      name === 'pickupLocation' ||
      name === 'dropOffLocation' ||
      name === 'vehicleType'
    ) {
      calculateEstimatedCost(
        value,
        formData.dropOffLocation,
        formData.vehicleType
      );
    }
  };

  const clearData = () => {
    setFormData({
      pickupLocation: '', dropOffLocation: '', date: '', time: '', vehicleType: '',
    });
    setEstimatedCost(0);
  };

  const calculateEstimatedCost = (pickup, dropOff, vehicle) => {
    if (pickup && dropOff && vehicle) {
      const pickupCoords = locations[pickup];
      const dropOffCoords = locations[dropOff];
      if (pickupCoords && dropOffCoords) {
        const distance = haversineDistance(pickupCoords, dropOffCoords);
        const cost = (costPerKm[vehicle] || 0) * distance;
        setEstimatedCost(cost.toFixed(2));
      }
    } else {
      setEstimatedCost(0);
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setFormData((prevData) => ({
      ...prevData,
      date: today,
    }));
    calculateEstimatedCost(
      formData.pickupLocation,
      formData.dropOffLocation,
      formData.vehicleType
    );
  }, [formData]);

  return (
    <div className={styles.container}>
      <GoogleMapComponent
        pickupLocation={formData.pickupLocation}
        dropOffLocation={formData.dropOffLocation}
      />
      <form
        onSubmit={(e) => {
          handleBookingSubmit(e, formData, clearData, estimatedCost, userId);
        }}
        className={styles.newBookingForm}
      >
        <ToastContainer />
        <h3 className={styles.formHeader}>New Booking</h3>
        <div className={styles.formGroup}>
          <label>Pickup Location:</label>
          <select
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select pickup location</option>
            {Object.keys(locations).map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Drop-off Location:</label>
          <select
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select drop-off location</option>
            {Object.keys(locations).map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            min={`${new Date().getHours() + 1 < 10 ? '0' : ''}${new Date().getHours() + 1}:00`}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Vehicle Type:</label>
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select vehicle type</option>
            {vehicleTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <h4>Estimated Cost: ₹{estimatedCost}</h4>
        </div>
        <div className={styles.formGroup}>
          <button type="submit" className={styles.submitButton}>Book Now</button>
        </div>
      </form>
    </div>
  );
};

export default NewBookingForm;


