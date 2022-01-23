import request from "./request";
import { toast } from 'react-toastify';

const API_createBaseCategory = async (
    name,
    desc,
    color,
    icon
) => {
    try {
        const req = await request.post("base-category/", {
            name,
            description: desc,
            color,
            icon
        });

        return req.data.data;
    } catch(e) {
        toast.error("Ошибка при создании базовой категории.");
        return null;
    }
    
}

export default API_createBaseCategory;