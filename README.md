# Spreadsheet App

## Overview

This project is a spreadsheet application built using Next.js for the frontend framework and Zustand for state management. The app provides a grid of editable cells with basic features such as font size adjustment, undo/redo functionality, pagination, and data storage in memory.

## Features

- **Editable Grid:** Render a grid of 1000 cells where each cell is editable.
- **Font Size Adjustment:** Adjust the font size of all cells using a numeric format.
- **Undo/Redo:** Revert changes made to cells with undo and redo functionality.
- **Pagination:** Handle large datasets efficiently with pagination.
- **Data Storage:** Save data entered in each cell in memory using Zustand for state management.
- **Search and Filter:** Quickly locate specific data within the grid.
- **Cell Formatting:** Basic formatting options for text alignment.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jyotik03/spreadsheet-app.git
2. **Navigate to the Project Directory:**
   cd spreadsheet-app
3. **Install Dependencies:**
   npm install

## Running the Application
1. **Start the Development Server:**
   npm run dev
2. **Open your browser and navigate to:**
   http://localhost:3000

## Usage
**Editing Cells:** Click on any cell to start editing. Changes are saved in memory.
**Adjust Font Size:** Use the dropdown menu at the top of the page to adjust the font size of all cells.
**Undo/Redo:** Use the provided buttons to undo or redo changes.
**Pagination:** Navigate through different pages of the grid using pagination controls.
**Search and Filter:** Use the search bar to locate specific data within the grid.

## Folder Structure
src/ ├── app/ │ ├── components/ │ │ ├── Cell.js - Component for individual cell rendering. │ │ └── Grid.js - Component for rendering the grid of cells. │ └── page.js - Main page component with grid and features. ├── store.js - Zustand store for managing grid state. ├── jsconfig.json ├── next.config.mjs ├── package-lock.json ├── package.json ├── postcss.config.js - PostCSS configuration file. ├── postcss.config.mjs └── tailwind.config.js - Tailwind CSS configuration file.


## Testing
To ensure the reliability of key features, you can run unit tests and integration tests:
npm test

## Deployment
For deploying the application, you can use platforms like Vercel or Netlify. Follow their documentation for deployment instructions.
