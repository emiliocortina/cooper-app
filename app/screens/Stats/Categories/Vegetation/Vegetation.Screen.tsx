import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import { VegetationDetails } from "cooper-app/app/services/models/categories/category-details";

const vegetationDetails = new VegetationDetails();

const VegetationScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={vegetationDetails} />;

export default VegetationScreen;