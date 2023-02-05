
## 💡 Inspiration 
When you book a flight there are many factors outside of your control. Sitting close to friends or family, proximity to a bathroom, or an aisle seat are all difficult to get. However, with SeatSwap the power is with the passenger. SeatSwap allows you to trade your seat with another closer to your desired location. Want to sit next to your significant other? No problem! Need an aisle seat but couldn't book one? Easy! With SeatSwap, passengers' comfort is in their hands. 

## 💻 What it does 
SeatSwap is a peer-to-peer, multi-platform communication app for users to swap seats with another passenger on their flight. They can log in to their preferred airline account and select a ticket they've currently booked. 

From there, they are met with a map of all seats on an airplane, with color-coding to indicate which seats are open. 

Users can then send a quick, automated message to a seat requesting a swap, with the recipient having the option to accept or reject the swap. 

And that's it! We intentionally made this process as simple as possible so that passengers don't have to deal with complicated log-ins or a clunky UI. 
## ⚙️ How we built it 

<table> <tr> <td><strong>Application</strong> </td> <td><strong>Purpose</strong> </td> </tr> <tr> <td>React Native Paper, React Navigation, Node.js</td> <td>Front-end web application </td> </tr> <tr> <td>Firebase Authentication, Firebase Realtime Database </td> <td>Backend </td> </tr>  <tr> <td>Expo </td> <td>Design and Testing</td> </tr> </table> 

## 🧠 Challenges we ran into 
- We had a hard time interacting with and modifying the key/pair values from the Firebase Database within the React Native Paper application. 
-  We ran into many bugs and unfamiliar behavior when working with the live version of the app in Expo, specifically in the iOS application. 
-  Managing and tracking the movement of users as they swap seats took a while to get up and running. 
## 🏅 Accomplishments that we're proud of 
- Releasing an app that works across Android, iOS, and the web with a responsive and clean UI on all platforms
- Developing the core functionality (swapping seats in real time) from the ground up, while also including an intuitive user interface. 
-  Integrating Firebase Authentication into our app so that each user has a unique username/password that is stored in a secure format. 

## 📖 What we learned 
- If we had spent more time on the design stage creating a concrete model we would have avoided wasting time on multiple prototypes. 
- Working with different versions across different computers means we had to be diligent about version control at all times. Luckily we avoided any issues with overwriting valuable code. 
- We learned how to integrate React Native Paper with a Firebase authentication and Realtime Database service to create a comprehensive user experience. 

## 🚀 What's next for SeatSwap
Our goal in the future is to integrate airline APIs to allow us to get real-time flight and passenger data. The way we have it set up is as a proof-of-concept, however once we get the airlines' API, we can allow users to beta-test a live version of the app. From there, we want to implement a monetization format that allows us to keep the app free while also investing in new features. To do this, we believe a subscription service to allow priority messages is the most viable option, as we would not sacrifice core functionality for profit. Finally, our end goal is to license this technology to the major airlines so that they can integrate the features we've built into their own apps, upgrading the travel experience of every passenger in the world. 
