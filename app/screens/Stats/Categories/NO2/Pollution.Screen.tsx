import React from "react";
import StatsCategoryTemplate from "../StatsCategory.template";
import { PollutionDetails } from "cooper-app/app/services/models/categories/category-details";

const pollutionDetails = new PollutionDetails();


const PollutionScreen: React.FC = () => <StatsCategoryTemplate categoryDetails={pollutionDetails} />;

export default PollutionScreen;