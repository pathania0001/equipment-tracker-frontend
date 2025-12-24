# Equipment Tracker - Frontend

A modern, modular React application for managing equipment inventory with full CRUD operations.

## 📁 Project Structure

```
src/
├── api/                    # API service layer
│   └── equipmentApi.js    # Equipment API calls
├── components/
│   ├── common/            # Reusable UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Select.jsx
│   │   ├── Modal.jsx
│   │   └── SearchBar.jsx
│   ├── equipment/         # Equipment-specific components
│   │   ├── EquipmentTable.jsx
│   │   ├── EquipmentForm.jsx
│   │   ├── EquipmentRow.jsx
│   │   └── StatusBadge.jsx
│   └── layout/           # Layout components
│       ├── Header.jsx
│       └── Container.jsx
├── constants/            # Application constants
│   └── equipmentConstants.js
├── hooks/               # Custom React hooks
│   ├── useEquipment.js
│   └── useSearch.js
├── utils/              # Utility functions
│   ├── validation.js
│   └── formatters.js
├── App.jsx            # Main application component
├── App.css           # Application styles
└── index.js         # Application entry point
```

## 🚀 Features

- ✅ **View Equipment** - Display all equipment in a sortable table
- ✅ **Add Equipment** - Create new equipment with validation
- ✅ **Edit Equipment** - Update existing equipment details
- ✅ **Delete Equipment** - Remove equipment with confirmation
- ✅ **Search & Filter** - Real-time search across all fields
- ✅ **Sorting** - Click column headers to sort
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **Loading States** - Visual feedback during API calls
- ✅ **Error Handling** - User-friendly error messages

## 🛠️ Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Custom Hooks** - For state management and reusability

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd equipment-tracker-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and set your API URL:
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🎨 Component Architecture

### Reusable Components

All common components are designed to be reusable throughout the application:

- **Button** - Customizable button with variants (primary, secondary, danger, etc.)
- **Input** - Form input with label, error handling, and validation
- **Select** - Dropdown select with label and error handling
- **Modal** - Accessible modal dialog with backdrop
- **SearchBar** - Search input with clear functionality

### Custom Hooks

- **useEquipment** - Manages all equipment-related operations (CRUD)
- **useSearch** - Handles search and sorting logic

### Utils

- **validation.js** - Form validation logic
- **formatters.js** - Date and string formatting utilities

## 🔌 API Integration

The app connects to a REST API with the following endpoints:

- `GET /api/equipment` - Fetch all equipment
- `POST /api/equipment` - Create new equipment
- `PUT /api/equipment/:id` - Update equipment
- `DELETE /api/equipment/:id` - Delete equipment

## 🎯 Key Design Decisions

1. **Separation of Concerns** - API logic, business logic, and UI are separated
2. **Reusability** - Common components can be used throughout the app
3. **Custom Hooks** - Complex logic is abstracted into reusable hooks
4. **Type Safety** - PropTypes could be added for better type checking
5. **Error Handling** - Graceful error handling at every level
6. **User Feedback** - Loading states and error messages for better UX

## 🧪 Testing

```bash
npm test
```

## 📝 Code Style

- Functional components with hooks
- Named exports for utilities, default exports for components
- Consistent file naming (PascalCase for components, camelCase for utilities)
- Comments for complex logic

## 🚧 Future Improvements

- [ ] Add unit tests with Jest and React Testing Library
- [ ] Implement pagination for large datasets
- [ ] Add data export functionality (CSV, Excel)
- [ ] Add equipment images/photos
- [ ] Implement advanced filtering options
- [ ] Add user authentication
- [ ] Dark mode support
- [ ] Offline support with service workers
- [ ] Add equipment history/audit log

## 📄 License

MIT

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support, email your-email@example.com or open an issue in the repository.