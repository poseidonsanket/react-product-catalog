# React Product Catalog

This project is a React-based product catalog application that allows users to browse, search, and filter products. It includes features such as pagination, a shopping cart, and detailed product views.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Challenges Faced](#challenges-faced)
- [Optional Enhancements](#optional-enhancements)
- [Screenshots](#screenshots)

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/poseidonsanket/react-product-catalog.git
   ```

2. Navigate to the project directory:
   ```
   cd react-product-catalog
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application locally:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and visit `http://localhost:5173`

## Libraries and Tools Used

- React: A JavaScript library for building user interfaces
- React Router: For handling routing in the application
- Framer Motion: For adding animations to components
- Tailwind CSS: For styling the application
- Lucide React: For icons
- Vite: As the build tool and development server

## Challenges Faced

1. **Image Sizing and Alignment**: 
   - Challenge: Ensuring consistent image sizes and alignment across different product cards.
   - Solution: Implemented a square aspect ratio container for images and used object-fit to maintain consistency.

2. **Pagination Implementation**: 
   - Challenge: Implementing pagination while maintaining state and filters.
   - Solution: Used React state to manage current page and items per page, updating the product list accordingly.

3. **Responsive Design**: 
   - Challenge: Making the application look good on various screen sizes.
   - Solution: Utilized Tailwind CSS's responsive classes and flexbox/grid layouts to create a fluid design.

4. **API Integration**:
   - Challenge: Integrating with an external API and handling asynchronous data fetching.
   - Solution: Used Fetch for API requests and implemented proper error handling and loading states.

## Optional Enhancements

1. **Animation**: Added subtle animations using Framer Motion to enhance user experience.
2. **Cart Functionality**: Implemented a basic cart system allowing users to add and remove items.
3. **Search and Filter**: Added real-time search and category filtering capabilities.
4. **Pagination**: Implemented pagination to improve performance and user experience when dealing with large datasets.
5. **API Integration**: Utilized an online API to fetch real product data, providing a more dynamic and realistic shopping experience.

## Screenshots

![Product List Page](![alt text](/public/image.png))
![Product Details Page](![alt text](/public/image-1.png))
![Cart Page](![alt text](/public/image-2.png))
![Pagination](![alt text](/public/image-3.png))
