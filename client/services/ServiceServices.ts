import axios from "axios";
import { API_ENPOINT } from "@/constants/LocalConst";

const API_PATH = API_ENPOINT + "/services";

export const pagingService = () => axios.get(API_PATH)