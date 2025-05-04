import { getDocs, collection, query, where, QueryConstraint } from "firebase/firestore"
import {create} from "zustand/react";
import {db} from "../../firebaseConfig.ts";
import {ICocktail} from "@/types/cocktail/ICocktail.ts";

export interface CocktailsState {
    cocktails: ICocktail[],
    isLoading: boolean;
    fetchCocktails: (filters?: Record<string, string[]>) => Promise<void>;
}

export const useCocktailsStore = create<CocktailsState>()((set) => ({
    cocktails: [],
    isLoading: false,
    fetchCocktails: async (filters?: Record<string, string[]>): Promise<void> => {
        try {
            set({ isLoading: true });

            // Початковий запит без фільтрів
            const cocktailCollection = collection(db, 'cocktails');
            const filterConditions: QueryConstraint[] = [];

            // Додавання фільтрів на основі значень у filters
            if (filters) {
                for (const [key, values] of Object.entries(filters)) {
                    if (values.length > 0) {
                        // Якщо значення масив, використовуємо "array-contains-any"
                        if (Array.isArray(values)) {
                            filterConditions.push(where(key, 'array-contains-any', values));
                        } else {
                            filterConditions.push(where(key, '==', values[0]));  // Для випадків, де фільтр має одне значення
                        }
                    }
                }
            }
            console.log(filterConditions)
            // Створюємо запит з усіма доданими умовами
            const q = filterConditions.length > 0
                ? query(cocktailCollection, ...filterConditions)
                : query(cocktailCollection);

            // Отримуємо документи
            const docSnap = await getDocs(q);

            const cocktails: ICocktail[] = docSnap.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            } as ICocktail));

            // Оновлюємо стейт
            set({ cocktails: cocktails });
        } catch (e) {
            console.error(e);
        } finally {
            set({ isLoading: false });
        }
    },
}));