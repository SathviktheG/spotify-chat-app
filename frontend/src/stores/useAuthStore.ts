import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

interface AuthStore {
	isAdmin: boolean;
	isLoading: boolean;
	error: string | null;

	checkAdminStatus: () => Promise<void>;
	reset: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
	isAdmin: false,
	isLoading: false,
	error: null,

	checkAdminStatus: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/admin/check");
			console.log("API Response:", response);
    		console.log("Is User Admin:", response.data.admin);
			set({ isAdmin: response.data.admin });
		} catch (error: any) {
			console.log("Error occurred:", error);
			set({ isAdmin: false, error: error.response.data.message });
		} finally {
			set({ isLoading: false });
		}
	},

	reset: () => {
		set({ isAdmin: false, isLoading: false, error: null });
	},
}));