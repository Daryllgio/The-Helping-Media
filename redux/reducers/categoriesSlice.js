// categoriesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    selectedCategories: [],
    allCategories: [
      {
        id: 'childWelfare',
        title: 'Child Welfare',
        subCategories: [
          'Orphanages',
          'Foster Care',
          'Child Protection',
          'Adoption Services',
          'Youth Services',
          'Child Advocacy',
        ],
      },
      {
        id: 'seniorCare',
        title: 'Senior Care',
        subCategories: [
          'Retirement Homes',
          'Senior Centers',
          'In-Home Care',
          'Meals on Wheels',
          "Alzeimer's Support",
          'Elder Abuse Prevention',
        ],
      },
      {
        id: 'health',
        title: 'Health',
        subCategories: [
          'Disability Support',
          'Substance Abuse',
          'Mental Health',
          'Public Health',
          'Medical Research',
          'Disease Prevention',
          'Rehabilitation Servives',
          'Hospice Care',
          'Emergency Care',
          'Chronic Illness Support',
        ],
      },
      {
        id: 'FoodAndNutrition',
        title: 'Food and Nutrition',
        subCategories: [
          'Food Banks',
          'Soup Kitchen',
          'Community Gardens',
          'Hunger Relief',
          'Farm-to-Table Initiatives',
        ],
      },
      {
        id: 'education',
        title: 'Education',
        subCategories: [
          'Literacy Programs',
          'Scholarship Funds',
          'School Supplies',
          'Adult Education',
          'Special Education',
          'Tutoring Services',
          'Early Childhood',
        ],
      },
      {
        id: 'communityDevelopment',
        title: 'Community Developement ',
        subCategories: [
          'Affordable Housing',
          'Public Safety',
          'Job Training',
          'Community Centers',
          'Volunteer Programs',
          'Economic Developement',
        ],
      },
      {
        id: 'animalProtection',
        title: 'Animal Protection',
        subCategories: [
          'Animal Shelters',
          'Wildlife Conservation',
          'Animal Rescue',
          'Marine Life',
          'Veterinary Services',
          'Pet Adoption',
          'Animal Rights',
        ],
      },
      {
        id: 'environment',
        title: 'Environment',
        subCategories: [
          'Conservation Efforts',
          'Pollution Control',
          'Climate Change',
          'Reforestation',
          'Sustainable Farming',
          'Ocean Cleanup',
          'Renewable Energy',
          'Waste Reduction',
        ],
      },
      {
        id: 'disasterRelief',
        title: 'Disaster Relief',
        subCategories: [
          'Emergency Aid',
          'Reconstruction',
          'Search and Rescue',
          'Shelter Provision',
          'Food Distribution',
          'Water Sanitation',
        ],
      },
    ],
  },
  reducers: {
    toggleCategory: (state, action) => {
      const index = state.selectedCategories.indexOf(action.payload);
      if (index !== -1) {
        state.selectedCategories.splice(index, 1);
      } else {
        state.selectedCategories.push(action.payload);
      }
    },
    setActiveExploreCategory: (state, action) => {
      state.activeExploreCategory = action.payload;
    },
  },
});

export const {toggleCategory, setActiveExploreCategory} =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
