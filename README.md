# ResQU
## Inspiration
As of September 12th, 2019, Hurricane Dorian has caused over 250,000 inhabitants of the Bahamas to lose power, and 2500 of them are registered as missing. In light of these recent events, we wanted to create a hack that could help the thousands of people stranded in their homes. That's why we created ResquTech.

## What it does
ResquTech aims to provide rescue organizations with a way to make rescue from floods, hurricanes, and other serious natural disasters easier. In the case of a flooded a residential/commercial area, ResquTech can provide organizations with technology to turn their regular off-the-shelf equipment into equipment that can save lives. Using any mid-sized commercial drone, a satellite phone, RescuTech provides software to combine the two into an easy to use rescue management suite.

## How we built it
ResquTech is built on a combination of Android, Firebase, and web components. By using Android, we can turn any data-connected smartphone into a server suitable to running a wifi-network and app to manage the network. Firebase allows us to interconnect the drone, which provides location data, as well as the web component, which is where we collect the vital information from those who are stuck in compromised areas. Our use of Firebase allows us to use the real-time database to give rescue organizers real-time information about who is trapped, where they're trapped, and what they can do to help them.

## Challenges we ran into
This hackathon we ran in to a lot of challenges in combining the real-world aspect of the project, namely the drone and the wifi network, with the software aspect, the website and the database. For example, in order to secure our check-in form, we had to run SSID verification using the drone's WiFi network. Another example was having one of our team members fall sick and have to return home, causing someone to pick up his slack in developing the website's UI.

We also ran into a couple issues in the software development. Namely, we had issues with our UI having weird flickering bugs due to a mix-match between javascript and jquery. Fortunately, we were able to debug the issue and resolve it by switching to pure javascript to speed up the processing and remove an external API.

## Accomplishments that we're proud of
We are proud of our ability to prove that you don't need commercial equipment to provide services that can save lives. Realistically, our product could be used by anyone with two components: A drone, and a phone. With this, they can use it to help clear neighborhoods, check up on loved ones, and make the rescue process easier.

We are also proud of providing more than a proof of concept, and making an actually functioning product with both a backend and a frontend.

## What we learned
Over the last 36 hours we learned a lot about the creative process. It's not as simple as sitting at a computer and coding, and especially working a group of 4 like we did, it was essential to maintain good communication so everyone knows what's going on.

On the technical side of things, we learned a lot about different technologies and how we can use them to communicate with eachother. For example, one of our members is more of an algorithm oriented person, but they learned how to use Firebase in a real application.

## What's next for ResqUTech
ResquTech has a lot of potential. Some of our biggest next steps would be to implement more features to help out the rescue organizers more efficiently cover the maximum amount of space they can. We can do this by implementing a solution to find the optimal route to visit each of the people who are stuck in their houses. Another next step would be to polish up the front-end, and improve the back-end security -- the last thing we want is for someone to meddle with vital rescue information!
