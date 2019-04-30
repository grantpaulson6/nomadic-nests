# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
Listing.delete_all
Location.delete_all

AA = Location.create!(
    name: "Alaska",
    lat: 63,
    lng: -148
)

BC = Location.create!(
    name: "British Columbia",
    lat: 55,
    lng: -123
)

GL = Location.create!(
    name: "Great Lakes",
    lat: 45,
    lng: -87
)

NP = Location.create!(
    name: "Northern Plains",
    lat: 46,
    lng: -108
)

NE = Location.create!(
    name: "New England",
    lat: 44,
    lng: -71
)

MA = Location.create!(
    name: "Mid Atlantic",
    lat: 38,
    lng: -78
)

MD = Location.create!(
    name: "Mississipi Drainage",
    lat: 36,
    lng: -90
)

FA = Location.create!(
    name: "Florida",
    lat: 28,
    lng: -81
)

SW = Location.create!(
    name: "Southwest",
    lat: 32,
    lng: -108
)

SU = Location.create!(
    name: "Southern Utah",
    lat: 38,
    lng: -111
)

CO = Location.create!(
    name: "Colorado",
    lat: 63,
    lng: -148
)

CA = Location.create!(
    name: "California",
    lat: 37,
    lng: -120
)

NW = Location.create!(
    name: "Northwest",
    lat: 47,
    lng: -122
)


Grant = User.create!(
    username: "grant",
    password: "password",
    first_name: "Grant",
    last_name: "Paulson",
    email: "ourwanderabout@gmail.com"
)


Listing.create!(
    title: "Converted Fire Lookout atop stunning peak",
    price: 25,
    location_id: NW.id,
    description: "Located in the gorgeous North Cascades National Park, enjoy premium sunrises and sunsets from this 360 degree lookout \
spot.  Comes with binoculars, a timeless cot, maps to reference while studying the \
surrounding peaks, and an adorable desk to contemplate the meaning of it all",
    property_type: "cabin",
    owner_id: Grant.id,
    max_guests: 8,
    num_beds: 1,
    num_bathrooms: 20,
    address: "North Cascades National Park",
    lat: 48.491059,
    lng: -121.206559
)

Listing.create!(
    title: "Klahowya Campground",
    price: 20,
    location_id: NW.id,
    description: "Stay in the lushiously wet rain forest of Olympic National Park! \
Not far from where they filmed the Twighlight series, and tons of great hiking options \
into the high peaks.",
    property_type: "campground",
    owner_id: Grant.id,
    max_guests: 4,
    num_beds: 0,
    num_bathrooms: 2,
    address: "Olympic National Park",
    lat: 47.995000,
    lng: -123.888732
)

Listing.create!(
    title: "Dispersed Camping in Gifford Pinchot National Forest",
    price: 0,
    location_id: NW.id,
    description: "Is it getting late and you don't know where to stay? Then this \
spot is perfect for you! Tucked in between the forest road and a lovely river, \
there isn't much traffic back here to drive by and awake you at night. Smell the \
lovely scent of northern birch and pine!",
    property_type: "dispersed camping",
    owner_id: Grant.id,
    max_guests: 20,
    num_beds: 0,
    num_bathrooms: 10,
    address: "Mount Rainier Park",
    lat: 46.805806,
    lng: -121.538848
)

Listing.create!(
    title: "Pitstop before climbing the three sisters",
    price: 5,
    location_id: NW.id,
    description: "Find a sheltered spot near the lake before you embark on a huge \
hike in the morning.  I think the neighbors are grilling hotdogs over their campfire.",
    property_type: "campground",
    owner_id: Grant.id,
    max_guests: 4,
    num_beds: 1,
    num_bathrooms: 14,
    address: "Deschutes National Forest",
    lat: 44.056244,
    lng: -121.754688
)

Listing.create!(
    title: "Creepy forest spot near Crater Lake",
    price: 100,
    location_id: NW.id,
    description: "Are you afraid of the dark? Do you hate weird noises at night \
that you can't explain? Then you're gonna freak out at this spot, especially after you \
hear we just re-introduced wolves into the local area.  Maybe you'll even have a \
hillbilly stumbled across your site",
    property_type: "dispersed camping",
    owner_id: Grant.id,
    max_guests: 4,
    num_beds: 2,
    num_bathrooms: 100,
    address: "Crater Lake National Park",
    lat: 42.881325,
    lng: -122.238351
)

Listing.create!(
    title: "Quaint home in the lovely town of Eugene",
    price: 1,
    location_id: NW.id,
    description: "Get some TLC from friends here. Comes with a delicious home cooked \
meal and an amazing experience of a TOTAL SOLAR ECLIPSE! Watch out for squirels \
getting into your car.",
    property_type: "guest friends/family",
    owner_id: Grant.id,
    max_guests: 4,
    num_beds: 4,
    num_bathrooms: 2,
    address: "Eugene",
    lat: 44.023271,
    lng: -123.111333
)

Listing.create!(
    title: "Hillside retreat in Portland",
    price: 2,
    location_id: NW.id,
    description: "Relax and spend time with family. Maybe rent a bike and cruise \
around the city, stopping for a nice pizza brunch.",
    property_type: "guest friends/family",
    owner_id: Grant.id,
    max_guests: 6,
    num_beds: 3,
    num_bathrooms: 3,
    address: "Porland",
    lat: 44.545151,
    lng: -122.751617
)

