import { useState } from 'react';
import './UserHome.css';
import PropertyEdit from './Property-edit';
const data = [
  {
    "type": "listed",
    "title": "Sample Title",
    "name": "Sunny Beachside Cottage",
    "price": "2000",
    "property_type": "Cottage",
    "photo": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
    "checkInTime": "3:00",
    "checkOutTime": "11:00",
    "minNights":"1",
    "maxNights":"10",
    "petsAllowed":"true",
    "maxPets":"2",
    "eventsAllowed":"true",
    "smokingAllowed":"true",
    "quietHoursEnabled":"true",
    "quietHoursStart":"10:00",
    "quietHoursEnd":"10:00",
    "commercialPhotography":"true",
    "maxGuests":"6",

    "rules": "No smoking, No pets, Quiet hours after 10 PM",
    "amenities": ["Wifi", "Kitchen", "Washing machine", "Pool", "Firepit"],
    "internalName": "hottub lake",
    "description": "Enjoy a relaxing stay at our Sunny Beachside Cottage. With 4 bedrooms, a pizza oven, hot tub, and a stunning lake view, this cottage offers the perfect getaway for families or groups of friends. Wake up to the sound of waves and relax in the hot tub at night. The property comes equipped with all the amenities you need, including Wi-Fi, air conditioning, and beach access."
  },
  {
    "type": "listed",
    "title": "Sample Title",
    "name": "Modern Downtown Apartment",
    "price": "$200 per night",
    "property_type": "Apartment",
    "photo": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-expect-best-106399.jpg&fm=jpg",
    "check_in_time": "2:00 PM",
    "check_out_time": "12:00 PM",
    "rules": "No parties, No smoking, No pets",
    "amenities": ["Air conditioning", "Dedicated workspace", "TV", "Free parking on premises", "Hot tub"],
    "internalName": "hottub lake",
    "description": "Located in the heart of downtown, this modern apartment is ideal for both business and leisure travelers. With a spacious living area, full kitchen, and self check-in options, you’ll feel right at home. The building includes a gym, elevator, and washer/dryer for added convenience."
  },
  {
    "type": "inProgress",
    "title": "Sample Title",
    "name": "Rustic Mountain Cabin",
    "price": "$175 per night",
    "property_type": "Cabin",
    "photo": "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
    "check_in_time": "4:00 PM",
    "check_out_time": "10:00 AM",
    "rules": "No smoking, No loud music, No outside guests",
    "amenities": ["Outdoor shower", "Firepit", "Washing machine", "TV", "Dedicated workspace"],
    "internalName": "hottub lake",
    "description": "Escape to our Rustic Mountain Cabin, tucked away in the woods. Perfect for a romantic retreat or a peaceful escape from the city, this cabin offers a cozy fireplace, private hot tub, and hiking trails right at your doorstep. BBQ with a view and enjoy the serene atmosphere."
  },
  {
    "type": "inProgress",
    "title": "Sample Title",
    "name": "Rustic Mountain Cabin",
    "price": "$175 per night",
    "property_type": "Cabin",
    "photo": "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?cs=srgb&dl=pexels-pixabay-417173.jpg&fm=jpg",
    "check_in_time": "4:00 PM",
    "check_out_time": "10:00 AM",
    "rules": "No smoking, No loud music, No outside guests",
    "amenities": ["Wifi", "Free parking on premises", "Pool", "Hot tub", "Air conditioning"],
    "internalName": "hottub lake",
    "description": "This cabin is perfect for nature lovers and adventure seekers alike. Enjoy the privacy of this secluded property while being just minutes away from hiking and outdoor activities. Equipped with a hot tub, BBQ grill, and high-speed Wi-Fi, it's the perfect mix of rustic charm and modern convenience."
  },
  {
    "type": "listed",
    "title": "Sample Title",
    "name": "Sunny Beachside Cottage",
    "price": "$150 per night",
    "property_type": "Cottage",
    "photo": "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
    "check_in_time": "3:00 PM",
    "check_out_time": "11:00 AM",
    "rules": "No smoking, No pets, Quiet hours after 10 PM",
    "amenities": ["TV", "Air conditioning", "Dedicated workspace", "Hot tub", "Kitchen"],
    "internalName": "hottub lake",
    "description": "This Sunny Beachside Cottage offers the perfect retreat for those seeking a relaxing escape. Enjoy the beautiful lake views from the comfort of the hot tub, or fire up the pizza oven for a fun family night in. With easy beach access and all the modern amenities you could need, this is a vacation home you won't want to leave."
  },
  {
    "type": "listed",
    "title": "Sample Title",
    "name": "Modern Downtown Apartment",
    "price": "$200 per night",
    "property_type": "Apartment",
    "photo": "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?cs=srgb&dl=pexels-expect-best-106399.jpg&fm=jpg",
    "check_in_time": "2:00 PM",
    "check_out_time": "12:00 PM",
    
    "rules": "No parties, No smoking, No pets",
    "amenities": ["Air conditioning", "Kitchen", "Dedicated workspace", "Washing machine", "Outdoor shower"],
    "internalName": "hottub lake",
    "description": "This stylish downtown apartment is fully equipped for your convenience. With self check-in, a gym, and easy access to local attractions, it's the ideal spot for those looking to experience the city's best. Whether you're here for business or pleasure, you'll love the modern amenities and comfortable design."
  }
]

export default function UserHome() {
    const [myProperty,setmyProperty] = useState(data);
    const [selectedProperty, setSelectedProperty] = useState(null); 
    
  

 
    function handleSave  (updatedAmenities) {
      // Update the myProperty state with the new amenities list
      setmyProperty({
        ...myProperty,
        amenities: updatedAmenities,
      });
    };
  
    const handlePropertyClick = (property) => {
      setSelectedProperty(property); 
    };
  
    const handleBackToList = () => {
      setSelectedProperty(null); 
    };
  
    return (
      <div className="userHome-container">
        <header>
          <div>
            <img
              style={{ width: '240px', height: '76px', marginLeft: '10px' }}
              src="/48564e5fe8898cf62b0bbf42276d6cf3.jpeg"
              alt="paradise"
            />
          </div>
          <div className="nav-bar">
            <ul>
              <li>Influencer</li>
              <li>Calendar</li>
              <li>Properties</li>
              <li>Inbox</li>
              <li>Upcoming</li>
              <li>Menu</li>
            </ul>
          </div>

          <div className='userhome-login'>

          </div>
        </header>
  
        <main>
          {selectedProperty ? (
            <PropertyEdit  selectedPropertyData={selectedProperty} handleSave={ handleSave}/>
          ) : (
            <div className="property-list">
              {myProperty.map((property, index) => (
                <div key={index} className="property-card" onClick={() => handlePropertyClick(property)}>
                  <div className="card-image">
                    <img src={property.photo} alt={property.name} />
                    <div className="card-status">
                      <span className="status-dot"></span> {property.type === "listed" ? "Listed" : "In Progress"}
                    </div>
                  </div>
                  <div className="card-info">
                    <h4>{property.location}</h4>
                    <h6 style={{ color: "#198E78" }}>{property.name}</h6>
                    <p>{property.dates}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    );
  }
  