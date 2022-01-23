import request from "./request";
import { toast } from 'react-toastify';

const API_removeSubscriptionVariant = async (id) => {
    try {
        const req = await request.delete(`subscription-variant/${id}`);

        return req.data.data;
    } catch(e) {
        toast.error("Ошибка при удалении варианта подписки.");
        return null;
    }
    
}

export default API_removeSubscriptionVariant;