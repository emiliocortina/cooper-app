import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api/api.service";
import { VegetationDetails } from "cooper-app/app/services/models/categories/category-details";

const vegetationDetails = new VegetationDetails();

const VegetationScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={vegetationDetails} />;

export default VegetationScreen;