import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import ApiService from "cooper-app/app/services/api.service";
import { RainDetails } from "cooper-app/app/services/models/categories/category-details";

const rainDetails = new RainDetails();

const RainScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={rainDetails} />;

export default RainScreen;