import { Request, Response } from 'express';
import { ICategory } from '../models/category';
import { CategoryService } from '../services/category.service';

const categoryService = new CategoryService();

export async function postCategory(req: Request, res: Response): Promise<void> {
    try {
        const category = req.body as ICategory;
        const newCategory = await categoryService.postCategory(category);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: "Error creating category", error });
    }
}

export async function getCategories(req: Request, res: Response): Promise<void> {
    try {
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const categories = await categoryService.getCategories(page, limit);
        res.status(200).json(categories);
    } catch (error) {
        res.status(400).json({ message: "Error getting categories", error });
    }
}

export async function getCategoryById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const category = await categoryService.getCategoryById(id);
        res.status(200).json(category);
    } catch (error) {
        res.status(400).json({ message: "Error getting category", error });
    }
}

export async function updateCategoryById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const category = req.body as ICategory;
        const updatedCategory = await categoryService.updateCategoryById(id, category);
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: "Error updating category", error });
    }
}

export async function deleteCategoryById(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id;
        const deletedCategory = await categoryService.deleteCategoryById(id);
        res.status(200).json(deletedCategory);
    } catch (error) {
        res.status(400).json({ message: "Error deleting category", error });
    }
}



