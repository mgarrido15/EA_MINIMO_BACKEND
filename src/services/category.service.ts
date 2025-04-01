import { CategoryModel } from '../models/category';
import { ICategory } from '../models/category';

export class CategoryService {
    async postCategory(category: ICategory) {
        console.log(category);
        const newCategory = new CategoryModel(category);
        return await newCategory.save();
    }

    async getCategories( page: number, limit: number): Promise<ICategory[]> {
        const skip = (page - 1) * limit;
        return await CategoryModel.find().populate('products.product_id').exec();
    }

    async getCategoryById(id: string) {
        return await CategoryModel.findById(id).populate('products.product_id').exec();
    }

    async updateCategoryById(id: string, category: ICategory) {
        return await CategoryModel.findByIdAndUpdate(id, category, { new: true }).populate('products.product_id').exec();
    }

    async deleteCategoryById(id: string) {
        return await CategoryModel.findByIdAndDelete(id).populate('products.product_id').exec();
    }

}